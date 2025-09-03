# EmailJS Setup Guide for One Love Academy Contact Form

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or your preferred email provider
4. Connect your `oneloveacademy360@gmail.com` account
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the One Love Academy website contact form.
```

4. Note down the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abc123xyz`)

### 5. Update Your Code
Replace these values in `src/components/ContactSection.tsx`:

```typescript
const serviceId = 'YOUR_SERVICE_ID';        // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';      // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY';        // Replace with your Public Key
```

### 6. Test the Form
1. Deploy your updated code to Netlify
2. Fill out the contact form on your website
3. Check your email for the message

## 📧 Email Template Variables Used:
- `{{from_name}}` - Full name (First + Last)
- `{{from_email}}` - User's email
- `{{phone}}` - Phone number
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (oneloveacademy360@gmail.com)

## 🎯 Features Added:
✅ Form validation (all fields required)
✅ Loading spinner during submission
✅ Success message when sent
✅ Error handling if submission fails
✅ Form reset after successful submission
✅ Professional email template

## 💡 Free Tier Limits:
- 200 emails per month
- Perfect for a school contact form

Need help? Contact EmailJS support or check their documentation at https://www.emailjs.com/docs/
