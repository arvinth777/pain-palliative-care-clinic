# 🔄 How Your CMS Integration Works

```
┌─────────────────────────────────────────────────────────────────┐
│                      SANITY CMS FLOW                             │
└─────────────────────────────────────────────────────────────────┘

1️⃣ CONTENT CREATION (Sanity Studio)
   ┌──────────────────────────────────────┐
   │  Sanity Studio (localhost:3333)      │
   │  ----------------------------------- │
   │  📝 Add Doctor Info:                 │
   │     - Name: Dr. G.P. Kirupakaran    │
   │     - Qualifications: MBBS, MD, DA  │
   │     - Bio: 30+ years experience...  │
   │     - Upload Profile Image          │
   │                                      │
   │  💾 Click "Publish"                  │
   └──────────────────────────────────────┘
                    │
                    │ Saves to Sanity Cloud
                    ▼
   ┌──────────────────────────────────────┐
   │  Sanity Cloud Database               │
   │  Project ID: d0m8dwid               │
   │  Dataset: production                │
   └──────────────────────────────────────┘
                    │
                    │ Fetched via API
                    ▼
2️⃣ DATA FETCHING (Next.js Website)
   ┌──────────────────────────────────────┐
   │  /lib/sanity.js                      │
   │  ----------------------------------- │
   │  import { client } from 'next-sanity'│
   │                                      │
   │  client.fetch(queries.getDoctor)    │
   │         ↓                            │
   │  Returns: {                          │
   │    name: "Dr. G.P. Kirupakaran",   │
   │    qualifications: "MBBS, MD, DA", │
   │    bio: "...",                      │
   │    profileImage: {...}              │
   │  }                                   │
   └──────────────────────────────────────┘
                    │
                    │ Used in components
                    ▼
3️⃣ DISPLAY (About Page)
   ┌──────────────────────────────────────┐
   │  /app/about/page.js                  │
   │  ----------------------------------- │
   │  useEffect(() => {                   │
   │    fetch doctor data                 │
   │    set state                         │
   │  })                                  │
   │                                      │
   │  {doctorData && (                    │
   │    <div>                             │
   │      <img src={urlFor(image)}/>     │
   │      <h4>{doctorData.name}</h4>     │
   │      <p>{doctorData.bio}</p>        │
   │    </div>                            │
   │  )}                                  │
   └──────────────────────────────────────┘
                    │
                    │ Rendered on page
                    ▼
4️⃣ USER SEES
   ┌──────────────────────────────────────┐
   │  Salem Pain Clinic Website           │
   │  (localhost:3002)                    │
   │  ----------------------------------- │
   │  📸 [Doctor's Photo]                 │
   │  Dr. G.P. Kirupakaran               │
   │  MBBS, MD, DA                       │
   │  Pain Management & Palliative Care  │
   │  30 years of experience             │
   │  [Full Bio from CMS...]             │
   └──────────────────────────────────────┘


🔄 UPDATE CYCLE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Edit in Sanity Studio → Publish → Refresh Website → See Changes!

No code changes needed! 🎉


📁 FILE STRUCTURE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/Desktop/salemclinic/              (Sanity Studio)
├── sanity.config.js               ← Your CMS schemas
├── package.json                   
└── [Studio files]

/Desktop/webproj/salem-pain-clinic/ (Next.js Website)
├── lib/
│   └── sanity.js                  ← CMS client & queries
├── app/
│   ├── about/
│   │   └── page.js                ← Uses doctor data
│   └── ...
└── package.json                   ← Has next-sanity installed


🎯 WHAT YOU CAN EDIT IN CMS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Doctor's name & qualifications
✅ Doctor's bio & experience years
✅ Doctor's profile photo
✅ Clinic hours & contact info
✅ Clinic address & phone numbers
✅ Google Maps URL

❌ Page layouts & design (still in code)
❌ Services cards (not CMS yet)
❌ Navigation & footer (not CMS yet)
