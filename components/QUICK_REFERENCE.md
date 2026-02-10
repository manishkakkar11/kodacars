# QUICK REFERENCE: The Only 3 Files You Need to Edit

This is a simplified reference for when you're ready to configure your website. You only need to edit 3 files total, and each edit is just replacing placeholder text with your actual API keys or URLs.

---

## FILE 1: index.html

**Location:** Root of your project (kodacars-website/index.html)

**What to find and replace:**

### Edit #1: Google Analytics Tracking ID
**Find this line (appears TWICE):**
```
G-XXXXXXXXXX
```

**Replace with:** Your actual Google Analytics Measurement ID (it will look like `G-ABC123XYZ`)

**Where it appears:**
- Once in line 10 (in the script src)
- Once in line 15 (in the gtag config)

### Edit #2: reCAPTCHA Site Key
**Find this line:**
```
6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
```

**Replace with:** Your actual reCAPTCHA Site Key (starts with 6Le...)

**Where it appears:**
- In the reCAPTCHA script tag (around line 18)

---

## FILE 2: services/emailService.ts

**Location:** kodacars-website/services/emailService.ts

**What to find and replace:**

### Edit #1: Web3Forms Access Key
**Find this line (near the top):**
```typescript
const ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
```

**Replace with:** Your actual Web3Forms Access Key (looks like: a1b2c3d4-e5f6-7890-abcd-ef1234567890)

### Edit #2: reCAPTCHA Site Key (again)
**Find this line (near the bottom):**
```typescript
const token = await window.grecaptcha.execute('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', {
```

**Replace with:** Your actual reCAPTCHA Site Key (same one from index.html)

---

## FILE 3: utils/pdfUtils.ts

**Location:** kodacars-website/utils/pdfUtils.ts

**What to find and replace:**

You need to replace the URL for each of your 5 whitepapers. Each one looks like this:

```typescript
url: 'YOUR_CUSTOMER_LOYALTY_PDF_URL', // Replace this
```

**Replace with:** The actual URL where your PDF is hosted

**The 5 whitepapers you need URLs for:**
1. Customer Loyalty
2. Large Vehicle
3. Reputation Management
4. Self Check In
5. Shuttle Services

**Important:** If you're using Google Drive:
- Get the sharing link from Google Drive
- Convert it from: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
- To this format: `https://drive.google.com/uc?export=download&id=FILE_ID`

---

## That's It!

Once you've edited these 3 files with your real API keys and PDF URLs, your website will be fully functional. Everything else is already set up and ready to go.

**Important reminder:** Make sure you save each file after editing it!

---

## Example of What Your Edits Will Look Like

**Before:**
```typescript
const ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
```

**After:**
```typescript
const ACCESS_KEY = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";
```

See? You're just replacing the placeholder text with your actual keys. That's all!
