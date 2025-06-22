# Meeting Summarizer
## 💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/harshitabisht05/meeting-summarizer.git
cd meeting-summarizer
```
### 2. Install Dependencies

```bash
npm install
```
### 3. Start the Dev Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view it in the browser.


# Pages to Build

| 🏷️ Page Name      | 📍 Path                | 📌 Purpose                                                                 |
| ------------------ | ---------------------- | -------------------------------------------------------------------------- |
| **Home Page**      | `/`                    | Landing page with Login/Register/Features or Upload/Dashboard if logged in |
| **Login Page**     | `/login`               | User login form                                                            |
| **Register Page**  | `/register`            | User registration form                                                     |
| **Upload Page**    | `/upload`              | Upload audio file → `POST /file/upload`                                    |
| **Dashboard Page** | `/dashboard`           | Show list of uploaded files → `GET /file/`                                 |
| **Summary Page**   | `/transcribe/[fileID]` | View transcript, summary, action items, and export                         |


# Components to Build

| Component                  | 📌 Purpose                | 🧠 What It Does                                                                                                            |
| -------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **`Navbar.jsx`**           | Navigation                | Provides consistent top menu (Dashboard, Upload, etc.) across all pages.                                                 |
| **`FileCard.jsx`**         | File preview in Dashboard | Displays basic file info (`filename`, `status`), with "View" and "Delete" actions.                                         |
| **`SummaryBox.jsx`**       | Shows summary             | Receives `summary` text and renders it inside a styled box.                                                                |
| **`TranscriptBox.jsx`**    | Shows transcript          | Displays the full transcript, fetched from `/transcribe/{file_id}`.                                                        |
| **`ActionItemsList.jsx`**  | Shows action items        | Renders a list of bullet points (from `/transcribe/items/{file_id}`) such as tasks or key points extracted from the audio. |
| **`ExportButtons.jsx`**    | CSV/PDF download          | Triggers downloads from `/export/csv/{file_id}` and `/export/pdf/{file_id}` when clicked.                                  |
| **`NotionExportForm.jsx`** | Export to Notion          | Lets user input `notion_token` and `database_id` and sends them to `/export/notion/{file_id}`.                             |
| **`Loader.jsx`**           | Loading spinner           | Reusable component to show while data (summary, transcript, etc.) is being fetched.                                        |

## ✅ Where These Components Are Used in Pages

| Page                   | Components Used                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------------- |
| `/upload`              | `Navbar`, `Loader`                                                                                        |
| `/dashboard`           | `Navbar`, `FileCard`, `Loader`                                                                            |
| `/transcribe/[fileID]` | `Navbar`, `SummaryBox`, `TranscriptBox`, `ActionItemsList`, `ExportButtons`, `NotionExportForm`, `Loader` |

---
## API Calls (Frontend → Backend)
| **Action** | HTTP          | **Method** | **Endpoint**                                |
|------------|---------------|------------|---------------------------------------------|
| Upload | file          | POST       | `/transcribe`                               |
| Get   | file history  | GET        | `/files` or `/summary/history`              |
| Export | summary       | GET        | `/export/{id}` (optional later)             |


## Pages

- `/upload/page.jsx` 

| Element            | Purpose                                             |
| ------------------ | --------------------------------------------------- |
| **File input**     | Select an audio file (e.g., `.mp3`, `.wav`, `.m4a`) |
| **Upload button**  | Sends the file           |
| **Validation**     | Show error for unsupported formats                  |
| **Status message** | Show success or error feedback                      |

- `/dashboard/page.jsx`

| Feature                       | Description                                         |
| ----------------------------- | --------------------------------------------------- |
| 📄 **List of uploaded files** | Display filename, upload status, date, etc.         |
| 🔍 **View button**            | Go to file detail page or transcription summary     |
| 🗑️ **Delete button**         | Remove uploaded file via FastAPI                    |
| 🧠 **Status badge**           | Show file status like "UPLOADED", "PROCESSED", etc. |
| 🎛️ **Optional filter**       | Filter files by status (`/file?status=...`)         |

- `/login/page.jsx`
- `/register/page.jsx`

- `transcribe/[fileID]/page.jsx`

| Section        | Purpose                                          |
| ----------------- | ------------------------------------------------ |
| ✅ **Summary**         | Display the auto-generated summary of the audio  |
| 📝 **Transcript**     | Show the full transcript text                    |
| 📌 **Action Items**   | Show bullet points extracted from the transcript |
| 📥 **Export Buttons** | Download as CSV, PDF, or export to Notion        |

### NAVBAR BEHAVIOR DEFINED

| 🧭 Page                | 👤 If Logged Out          | ✅ If Logged In                  |
| ---------------------- | ------------------------- | ------------------------------- |
| `/` (Home / Main Page) | Login, Register, Features | Logout, Upload, Dashboard       |
| `/upload`              | ❌ Redirect to login       | Logout, Dashboard, Home         |
| `/dashboard`           | ❌ Redirect to login       | Logout, Upload, Home            |
| `/transcribe/[fileID]` | ❌ Redirect to login       | Logout, Upload, Dashboard, Home |



# 🗂️ Complete File & Folder Structure
```bash
/app
├── layout.jsx                  ← Wraps all pages with <Navbar />
├── globals.css                 ← Tailwind styles
├── page.jsx                    ← Home page (login/register view or dashboard view)
├── login/
│   └── page.jsx                ← Login form page
├── register/
│   └── page.jsx                ← Register form page
├── upload/
│   └── page.jsx                ← Upload audio file page
├── dashboard/
│   └── page.jsx                ← List uploaded files
├── transcribe/
│   └── [fileID]/
│       └── page.jsx            ← Summary, transcript, action items, export tools
├── components/
│   ├── Navbar.jsx              ← Dynamic navigation based on route & login state
│   ├── FileCard.jsx            ← Shows file info in dashboard
│   ├── SummaryBox.jsx          ← Displays summary
│   ├── TranscriptBox.jsx       ← Displays transcript
│   ├── ActionItemsList.jsx     ← Lists extracted action items
│   ├── ExportButtons.jsx       ← Download as CSV/PDF
│   ├── NotionExportForm.jsx    ← Export action items to Notion
│   ├── Loader.jsx              ← Reusable loading spinner
│   ├── Footer.jsx              
```



### TASK:

- Login, register, navbar,footer (ojaswee)
- upload page ,dashboard(paridhi)
- home page, transcribe, API Integration (harshita)

(If intalling anything extra do mention it on README.md file)

### Font:

- For Heading use Eurostile font like:
```bash
<h1 style={{ fontFamily: "var(--font-eurostile)" }} className="text-4xl font-bold">
This is Eurostile
</h1>
```

- For other use Manrope font like:
```bash
<p style={{ fontFamily: "var(--font-manrope)" }} className="text-lg mt-4">
This is Manrope - modern and clean.
</p>
```