'use server';

import { google } from 'googleapis';
import { Readable } from 'stream';
import path from 'path';
import fs from 'fs';
// Define the Google Drive API scopes and service account file path
const SCOPES = [process.env.GOOGLE_SCOPES || 'https://www.googleapis.com/auth/drive.file'];

const SERVICE_ACCOUNT_FILE = path.resolve('./src/lib/token.json');
const FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID || '1D9YxWN3sdlky7GvDT-6kPHA1kKkyX_et';
// Load service account credentials from a JSON key file.
const CREDENTIALS = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_FILE, 'utf-8'));


export const uploadToGoogleDrive = async (formData) => {
  try {
    // Create a new JWT client using the service account credentials
    const auth = new google.auth.GoogleAuth({
      credentials: CREDENTIALS,
      scopes: SCOPES,
    });

    // Get the authenticated client
    const driveClient = google.drive({ version: 'v3', auth });
    const file = formData.get('file');
    const fileName = formData.get('fileName');
    const fileBuffer = file.stream();

    // Create a new file metadata object
    const fileMetadata = {
      name: fileName,
      parents: [FOLDER_ID],
    };

    // Create a new media upload request
    const media = {
      mimeType: file.type,
      body: Readable.from(fileBuffer),
    };

    // Upload the file to Google Drive
    const response = await driveClient.files.create({
      requestBody: fileMetadata,
      media,
      fields: 'id',
    });

    // Return the file ID as a plain object
    return { fileId: response.data.id };
  } catch (error) {
    console.error('Error uploading file to Google Drive:', error);
    throw error;
  }
};
