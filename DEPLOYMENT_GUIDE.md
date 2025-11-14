# 🚀 Deployment Guide for cPanel

## ✅ Build Status
- ✅ Build completed successfully
- ✅ All 15 pages generated
- ✅ .htaccess file configured
- ✅ Ready for cPanel deployment

## 📁 What to Upload

Upload **ALL contents** from the `out` folder to your cPanel `public_html` directory.

### Required Files & Folders:

```
out/
├── .htaccess          ← Important! Must be uploaded
├── index.html         ← Homepage
├── 404.html           ← Error page
├── favicon.ico        ← Site icon
├── _next/             ← Next.js assets (CSS, JS)
│   └── static/        ← Contains all JavaScript and CSS files
├── images/            ← All website images
├── video/             ← Video files
├── about/             ← About page
├── ai-agents/         ← AI Agents page
├── careers/           ← Careers page
├── contact/           ← Contact page
├── faq/               ← FAQ page
├── partner-portal/    ← Partner Portal page
├── privacy-policy/    ← Privacy Policy page
├── projects/          ← Projects page
├── resources/         ← Resources page
├── services/          ← Services page
└── terms/             ← Terms page
```

## 📤 Step-by-Step Upload Instructions

### Method 1: cPanel File Manager

1. **Login to cPanel**
   - Go to your hosting control panel
   - Click on "File Manager"

2. **Navigate to public_html**
   - Open the `public_html` folder
   - This is your website root directory

3. **Delete old files (if any)**
   - Select all existing files
   - Delete them (keep a backup if needed)

4. **Upload new files**
   - Click "Upload" button
   - Select ALL files and folders from the `out` directory
   - Wait for upload to complete

5. **Extract if uploaded as ZIP**
   - If you zipped the `out` folder, extract it
   - Make sure files are directly in `public_html`, not in a subfolder

### Method 2: FTP Client (FileZilla, WinSCP, etc.)

1. **Connect to your server**
   - Host: `ftp.yourdomain.com` or your server IP
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21 (or 22 for SFTP)

2. **Navigate to public_html**
   - Go to `/public_html` directory

3. **Upload files**
   - Drag and drop ALL contents from `out` folder
   - Ensure `.htaccess` is uploaded (it's a hidden file)

## ✅ Verification Checklist

After uploading, verify:

- [ ] `.htaccess` file is in `public_html` root
- [ ] `index.html` is in `public_html` root
- [ ] `_next` folder exists with subfolders
- [ ] All page folders exist (about, contact, faq, etc.)
- [ ] `images` folder contains all image files
- [ ] `video` folder contains video files

## 🌐 Test Your Website

1. **Visit your domain**: `https://yourdomain.com`
2. **Test all pages**:
   - Homepage: `/`
   - About: `/about/`
   - Services: `/services/`
   - Contact: `/contact/`
   - FAQ: `/faq/`
   - Projects: `/projects/`
   - AI Agents: `/ai-agents/`

3. **Check for issues**:
   - Images loading correctly
   - CSS styling applied
   - JavaScript working
   - Links navigating properly

## 🔧 Troubleshooting

### Issue: Website not working with domain

**Check these in order:**

1. **DNS Configuration**
   - Verify your domain's A record points to your server IP
   - Check DNS propagation: Use `nslookup yourdomain.com` or visit whatsmydns.net
   - Wait 24-48 hours for DNS propagation if you just changed it

2. **Domain Configuration in cPanel**
   - Go to cPanel → "Domains" or "Addon Domains"
   - Ensure your domain is properly added and pointing to `public_html`
   - Check if domain is set as "Main Domain" or "Addon Domain"

3. **File Location**
   - Files MUST be in `public_html` (not in a subdirectory)
   - If using addon domain, check the document root path
   - Verify `index.html` is directly in `public_html` root

4. **.htaccess File**
   - Ensure `.htaccess` is uploaded (it's a hidden file)
   - Check file permissions: Should be 644
   - Verify `.htaccess` is in `public_html` root (same level as `index.html`)
   - In cPanel File Manager, enable "Show Hidden Files" to see `.htaccess`

5. **File Permissions**
   - Set all folders to 755
   - Set all files to 644
   - Set `.htaccess` to 644

6. **Browser Cache**
   - Clear browser cache (Ctrl+Shift+Delete)
   - Try incognito/private browsing mode
   - Try different browser

7. **Check Server Error Logs**
   - In cPanel, go to "Errors" or "Error Log"
   - Look for any Apache errors related to `.htaccess` or rewrite rules

### Issue: Pages show 404 error
**Solution**: 
- Make sure `.htaccess` file is uploaded and has correct permissions (644)
- Verify the page folder exists (e.g., `/about/` folder with `index.html` inside)
- Check that `.htaccess` rewrite rules are working (see updated file)

### Issue: CSS/JS not loading
**Solution**: 
- Check `_next` folder is uploaded completely
- Verify file permissions (folders: 755, files: 644)
- Check browser console (F12) for 404 errors on CSS/JS files
- Verify paths in HTML are correct (should start with `/_next/`)

### Issue: Images not showing
**Solution**: 
- Verify `images` folder is uploaded
- Check image paths in browser console
- Ensure image file permissions are 644

### Issue: Site shows blank page
**Solution**:
- Check browser console for errors (F12 → Console tab)
- Verify `index.html` exists in root
- Check `.htaccess` file is present and has correct permissions
- Look for JavaScript errors in browser console
- Verify all files uploaded completely (check file sizes match)

### Issue: Redirect loop or too many redirects
**Solution**:
- The `.htaccess` file has been updated to fix this
- Re-upload the new `.htaccess` file from the `out` folder
- Clear browser cache and try again

## 📝 File Permissions

Set these permissions in cPanel:
- **Folders**: 755
- **Files**: 644
- **.htaccess**: 644

## 🎯 Quick Upload Command (if you have SSH access)

```bash
cd /home/username/public_html
rm -rf *
# Then upload all files from out folder
```

## 📞 Support

If you encounter any issues:
1. Check browser console (F12) for errors
2. Verify all files uploaded correctly
3. Check file permissions
4. Ensure `.htaccess` is present

---

**Build Date**: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
**Next.js Version**: 14.2.33
**Build Status**: ✅ Success

