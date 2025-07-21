# Discord Gallery Integration Setup Guide

This guide will help you set up automatic Discord image integration for the CERPC website gallery.

## Overview

The integration uses Discord webhooks to automatically capture images posted in specific Discord channels and display them on your website gallery in real-time.

## Step 1: Create Discord Webhook

1. **Open Discord Server Settings**
   - Go to your Discord server
   - Click on the server name → `Server Settings`

2. **Create Webhook**
   - Navigate to `Integrations` → `Webhooks`
   - Click `Create Webhook`
   - Give it a name like "Gallery Bot"
   - Select the channel you want to monitor for images
   - Copy the webhook URL (you'll need this later)

3. **Repeat for Multiple Channels** (Optional)
   - Create separate webhooks for different channels (patrol-photos, training-updates, etc.)
   - Each webhook can monitor a different channel

## Step 2: Configure Your Channel Mapping

1. **Get Channel IDs**
   - Enable Developer Mode in Discord: `User Settings` → `Advanced` → `Developer Mode`
   - Right-click on your channels → `Copy ID`
   - Note down the channel IDs and their names

2. **Update Channel Mapping**
   - Edit `api/discord/webhook.js`
   - Find the `getChannelName` function
   - Update the channel mapping with your Discord channels:

```javascript
getChannelName(channelId) {
  const channelMap = {
    '123456789012345678': 'patrol-photos',
    '987654321098765432': 'training-updates', 
    '456789123456789123': 'community-events',
    '789123456789123456': 'equipment-updates',
    '321098765432109876': 'special-events'
  };
  
  return channelMap[channelId] || 'general';
}
```

## Step 3: Set Up the Backend Server

1. **Install Dependencies**
   ```bash
   cd api
   npm install
   ```

2. **Create Environment File**
   ```bash
   cp .env.example .env
   ```

3. **Configure Environment**
   - Edit `.env` file:
   ```env
   PORT=3001
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:3000
   ```

4. **Start the Server**
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3001`

## Step 4: Configure Discord Webhook URL

You have two options for setting up the webhook:

### Option A: Direct Webhook (Recommended)
Configure your Discord webhook to send directly to your server:

**Webhook URL:** `http://your-domain.com/api/discord/webhook`

### Option B: IFTTT/Zapier Integration
If you prefer using a service like IFTTT or Zapier:

1. Create a trigger for "New message posted in Discord channel"
2. Set the action to "Webhook POST request"
3. URL: `http://your-domain.com/api/discord/webhook`
4. Method: POST
5. Content Type: application/json

## Step 5: Test the Integration

1. **Check Server Status**
   Visit: `http://localhost:3001/api/health`
   
   You should see:
   ```json
   {
     "status": "Server is running",
     "timestamp": "...",
     "endpoints": {...}
   }
   ```

2. **Test Image API**
   Visit: `http://localhost:3001/api/discord/images`
   
   Initially, this will return empty or mock data.

3. **Post Test Image**
   - Post an image in your Discord channel
   - Check the gallery page on your website
   - The image should appear automatically

## Step 6: Deploy to Production

### Using Netlify Functions (Recommended)

1. **Create Netlify Function**
   ```bash
   mkdir netlify/functions
   ```

2. **Create Discord Function**
   Create `netlify/functions/discord-webhook.js`:
   ```javascript
   const { handleWebhook } = require('../../api/discord/webhook');
   
   exports.handler = async (event, context) => {
     if (event.httpMethod !== 'POST') {
       return { statusCode: 405, body: 'Method Not Allowed' };
     }
     
     try {
       const result = await handleWebhook(JSON.parse(event.body));
       return {
         statusCode: 200,
         body: JSON.stringify(result)
       };
     } catch (error) {
       return {
         statusCode: 500,
         body: JSON.stringify({ error: error.message })
       };
     }
   };
   ```

3. **Update Webhook URL**
   Use: `https://your-site.netlify.app/.netlify/functions/discord-webhook`

### Using Vercel

1. **Create API Route**
   ```bash
   mkdir -p pages/api/discord
   ```

2. **Create Webhook Handler**
   Create `pages/api/discord/webhook.js`:
   ```javascript
   import { handleWebhook } from '../../../api/discord/webhook';
   
   export default async function handler(req, res) {
     if (req.method !== 'POST') {
       return res.status(405).json({ message: 'Method not allowed' });
     }
     
     try {
       const result = await handleWebhook(req.body);
       res.status(200).json(result);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   }
   ```

## Troubleshooting

### Images Not Appearing
1. Check server logs for webhook requests
2. Verify channel ID mapping is correct
3. Ensure Discord webhook URL is pointing to your server
4. Check that images have proper CORS headers

### Webhook Not Triggered
1. Verify Discord webhook is configured correctly
2. Check that the webhook URL is accessible
3. Test with a tool like ngrok for local development
4. Ensure Discord channel permissions allow webhooks

### Server Issues
1. Check server logs: `npm run dev`
2. Verify all dependencies are installed
3. Check environment variables are set correctly
4. Ensure port 3001 is not already in use

## Advanced Configuration

### Custom Categories
Edit the `createImageData` function in `webhook.js` to customize how images are categorized based on channel names or message content.

### Image Storage
By default, images are stored as JSON metadata with URLs pointing to Discord's CDN. For permanent storage, consider:
- Downloading images to your server
- Using cloud storage (AWS S3, Google Cloud Storage)
- Database storage for metadata

### Security
- Add webhook signature verification
- Use HTTPS in production
- Implement rate limiting
- Add authentication for manual sync endpoints

## API Endpoints

- `GET /api/discord/images` - Get all images
- `GET /api/discord/images?category=operations` - Get filtered images
- `POST /api/discord/webhook` - Discord webhook endpoint
- `POST /api/discord/sync` - Manual sync trigger
- `GET /api/discord/health` - Health check

## Support

If you encounter issues:
1. Check the server logs
2. Verify Discord webhook configuration
3. Test API endpoints manually
4. Ensure proper CORS configuration for your domain

The integration will automatically categorize images based on channel names and display them with Discord user information, timestamps, and reactions on your gallery page.
