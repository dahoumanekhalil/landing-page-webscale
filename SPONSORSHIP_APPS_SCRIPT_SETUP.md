# Google Apps Script Setup Guide for Sponsorship Registration Form

## Overview
This guide will help you set up Google Apps Script to handle form submissions from your sponsorship registration form and automatically save the data to a Google Sheet.

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Sponsorship Registration Data" or similar
4. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)
5. Keep this tab open - you'll need it later

## Step 2: Create Google Apps Script Project
1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default `function myFunction() {}` code
4. Copy the entire content from `sponsorship-registration-apps-script.js` and paste it
5. Save the project (Ctrl/Cmd + S) with a name like "Sponsorship Registration Handler"

## Step 3: Connect Script to Your Sheet
1. In the Apps Script editor, click on the "Resources" or "Extensions" menu
2. Select "Google Sheets API" and enable it if prompted
3. In your script, you can either:
   - **Option A**: Use `SpreadsheetApp.getActiveSheet()` (current method)
   - **Option B**: Use a specific sheet ID by replacing the line with:
     ```javascript
     const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID_HERE').getActiveSheet();
     ```

## Step 4: Set Up the Sheet Structure
1. In the Apps Script editor, run the `setupSheet()` function:
   - Click on the function dropdown and select "setupSheet"
   - Click the "Run" button (▷)
   - Authorize the script when prompted
2. Check your Google Sheet - it should now have formatted headers

## Step 5: Deploy the Script as Web App
1. Click "Deploy" → "New Deployment"
2. Click the gear icon ⚙️ next to "Type" and select "Web app"
3. Configure the deployment:
   - **Description**: "Sponsorship Registration Form Handler v1"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click "Deploy"
5. **Important**: Copy the Web App URL - it looks like:
   ```
   https://script.google.com/macros/s/AKfycby...your-script-id.../exec
   ```

## Step 6: Update Your Environment Variables
1. In your React project, create or update your `.env` file:
   ```env
    =https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
2. Replace `YOUR_SCRIPT_ID` with your actual script ID from step 5

## Step 7: Test the Setup
1. **Test the script directly**:
   - In Apps Script, run the `testScript()` function
   - Check your Google Sheet for test data
   
2. **Test the form**:
   - Start your React development server
   - Fill out and submit the sponsorship registration form
   - Check your Google Sheet for the new submission

## Data Structure
Your Google Sheet will have these columns:

| Column | Arabic Header | English Description |
|--------|---------------|-------------------|
| A | التاريخ والوقت | Timestamp |
| B | اسم الشركة / المؤسسة | Company Name |
| C | المجال أو القطاع | Sector |
| D | قطاع آخر | Other Sector |
| E | حجم الشركة | Company Size |
| F | الولاية | Wilaya (State) |
| G | الاسم الكامل | Full Name |
| H | المنصب / الدور | Role/Position |
| I | البريد الإلكتروني | Email |
| J | رقم الهاتف | Phone Number |
| K | نوع الرعاية | Sponsorship Type |
| L | نوع رعاية آخر | Other Sponsorship Type |
| M | أهداف الرعاية | Sponsorship Goals |
| N | هدف آخر | Other Goal |
| O | ميزانية الرعاية | Sponsorship Budget |
| P | ملاحظات إضافية | Additional Notes |
| Q | موافقة الحضور | Attendance Consent |

## Features Included ✨

### 🎨 **Automatic Formatting**
- Headers styled with your brand colors (#fbbc05)
- Alternating row colors for better readability
- Right-to-left (RTL) layout for Arabic support
- Auto-resized columns based on content

### 📊 **Data Management**
- Automatic timestamps for each submission
- Proper handling of array data (checkboxes)
- Data validation for email fields
- Frozen header row for easy navigation

### 🛠️ **Utility Functions**
- `setupSheet()`: Initialize sheet with headers and formatting
- `testScript()`: Test with sample data
- `getSheetStats()`: Get submission statistics
- `exportToCsv()`: Export data as CSV backup
- `addDataValidation()`: Add email validation

### 🔒 **Error Handling**
- Comprehensive error logging
- Arabic error messages for users
- Graceful fallbacks for missing data

## Troubleshooting

### Common Issues:

**1. CORS Errors**
- Ensure the script is deployed as a web app with "Anyone" access
- Check that you're using the correct deployment URL

**2. Data Not Appearing**
- Verify the Web App URL in your `.env` file
- Check the Apps Script execution logs (View → Logs)
- Run `testScript()` to verify the script works

**3. Permission Issues**
- Re-run the authorization process in Apps Script
- Ensure you have edit access to the Google Sheet

**4. Form Data Missing**
- Check that form field names match the script expectations
- Verify FormData is being sent correctly from the React form

### Debug Steps:
1. Check Apps Script logs: View → Executions
2. Test with sample data using `testScript()`
3. Verify sheet permissions and structure
4. Check browser network tab for request details

## Security Considerations

- ✅ **Sheet Access**: Only you can view the Google Sheet data
- ✅ **Script Access**: Set to "Anyone" for form submissions only
- ✅ **Data Validation**: Email validation prevents invalid entries
- ✅ **Error Handling**: No sensitive data exposed in error messages

## Maintenance

### Regular Tasks:
- **Backup Data**: Use `exportToCsv()` function monthly
- **Monitor Usage**: Check `getSheetStats()` for submission counts
- **Update Validation**: Modify `addDataValidation()` as needed

### Updating the Script:
1. Make changes in Apps Script editor
2. Save the project
3. Create new deployment or update existing one
4. Test thoroughly before going live

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review Apps Script execution logs
3. Test individual functions in the script editor
4. Verify all environment variables are set correctly

---

**🎉 Once set up, your sponsorship registration form will automatically save all submissions to your Google Sheet with beautiful formatting and comprehensive data tracking!**

