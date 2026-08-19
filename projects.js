const projectsData = [
  {
    id: "speech",
    title: "AI Speech Transcription & Translation",
    category: "ai",
    tags: ["Flask", "React", "Gemini API", "AssemblyAI"],
    summary: "Integrated AssemblyAI and Gemini LLM API for real-time transcription, translation, and summarization. Features a responsive dashboard with audio waveform visualization.",
    bullets: [
      "Integrated AssemblyAI (speech-to-text) and Gemini LLM API for real-time transcription, multilingual translation, and summarization — demonstrating hands-on LLM API and prompt engineering expertise.",
      "Built waveform visualization and multilingual output pipeline, showcasing end-to-end AI tool implementation."
    ],
    icon: "bx-microphone",
    github: "https://github.com/chapranishika/voiceforge-ai"
  },
  {
    id: "alcohol",
    title: "Alcohol Consumption Prediction System",
    category: "ds",
    tags: ["Python", "PyCaret", "XGBoost", "SMOTE", "Streamlit"],
    summary: "Evaluated 8 ML models on the NHIS dataset; XGBoost achieved a benchmark 95.3% accuracy. Deployed a Streamlit web app providing behavioral recommendations.",
    bullets: [
      "Evaluated 8 ML models on the NHIS dataset; XGBoost achieved 95.3% accuracy — structured model evaluation mirrors AI tool benchmarking workflows.",
      "Deployed Streamlit web app with personalized behavioral recommendations, translating ML insights into actionable user-facing outputs."
    ],
    icon: "bx-wine",
    github: ""
  },

  {
    id: "rockfall",
    title: "AI-Based Rockfall Prediction & Alert System",
    category: "ai",
    tags: ["Python", "PyTorch", "XGBoost", "React", "Open-Meteo"],
    summary: "Designed an ML risk-scoring pipeline combining environmental sensor data and GIS. Qualified for SIH 2025 intra-college pre-final round.",
    bullets: [
      "Architected and deployed a full-stack real-time geophysical safety monitoring platform serving two user modes (NDRF workers and tourists), with a Next.js 14 frontend on Vercel and a FastAPI backend on Render.",
      "Trained a U-Net+ResNet34 segmentation model on 585 real drone patches using BCEDiceLoss (0.5×BCE + 0.5×Dice) with two-phase encoder training, achieving Test Dice=0.89, IoU=0.80, F1=0.89 on held-out imagery.",
      "Engineered a 123-feature geotechnical sensor pipeline (rolling windows, lag deltas, cross-sensor interactions) and trained an XGBoost risk classifier achieving AUC=0.88, deployed behind a live WebSocket stream using an Ornstein-Uhlenbeck mean-reverting simulation.",
      "Integrated OSM Nominatim reverse geocoding and Open-Meteo API to fuse real-time weather conditions and 7-day forecasts into the tourist safety risk index.",
      "Implemented sensor-image fusion scoring (55% sensor / 45% image) with a safety bias that conservatively elevates risk when signal divergence exceeds 0.30 — a deliberate life-safety design decision.",
      "Configured async MongoDB logging via Motor for safety records and Git LFS to version-control binary model weights (.pt, .pkl) in the CI/CD pipeline."
    ],
    icon: "bx-landscape",
    github: "https://github.com/chapranishika/updated-rockfall"
  },
  {
    id: "smokesense",
    title: "SmokeSense AI Urge Prediction",
    category: "ds",
    tags: ["React", "FastAPI", "NumPyro", "MAML", "WebSockets"],
    summary: "Engineered a Bayesian personalization system predicting smoking urges from wearable data (HR/HRV) using NumPyro. Leveraged MAML for cross-user personalization.",
    bullets: [
      "Engineered a persona-based synthetic dataset generation pipeline (10,000 rows, 5 behavioral personas × 20 users) to enable Model-Agnostic Meta-Learning (MAML) task diversity and per-user Bayesian personalization for a smoking-urge prediction system.",
      "Grounded synthetic data generation rules in 4+ peer-reviewed research papers, applying min-max normalization to derive statistically defensible location- and time-of-day risk scores from published prevalence/circadian data.",
      "Designed 5 psychologically-validated smoker personas (stress-reactive, habitual, social, dependent, night-pattern) mapped to the established Horn-Waingrow/Ikard Reasons for Smoking typology, translating clinical literature into parameterized generative rules.",
      "Built a full-stack application with a React 18 + Vite + Zustand frontend and a FastAPI + SQLite backend, including bcrypt authentication, WebSocket live wearable data streaming, and a backend-proxied AI chat endpoint.",
      "Implemented real Bayesian inference using NumPyro (AutoNormal SVI) achieving ROC-AUC of 0.9845 and Brier score of 0.0397, with a dual-threshold prediction policy (mean confidence + posterior CI width) for reliable urge forecasting.",
      "Validated backend reliability with a 66-test pytest suite covering authentication, inference, and API endpoints.",
      "Authored a comprehensive deployment guide covering Render+Vercel, Railway, and VPS+Nginx production options."
    ],
    icon: "bx-heart",
    github: "https://github.com/chapranishika/SmokeSense-AI"
  },
  {
    id: "paysense",
    title: "PaySense Guardian UPI Shield",
    category: "mobile",
    tags: ["Kotlin", "Android SDK", "Room DB", "FastAPI", "XGBoost"],
    summary: "Developed an Android mobile security client and FastAPI backend ensemble (XGBoost + Logistic Regression) that intercepts and parses transaction SMS alerts in under 10ms.",
    bullets: [
      "Architected and developed PaySense, a three-layer zero-trust UPI fraud detection system composed of a native Android client and a FastAPI backend, designed to eliminate alert fatigue by personalising anomaly detection baselines to individual spending habits.",
      "Engineered an on-device, low-latency SMS parsing engine in Kotlin that processes transaction alerts in under 10 ms; implemented a three-gate deterministic filter (TRAI ID regex, keyword checks, and named-capture regex extraction) utilizing the goAsync() receiver pattern and Coroutines to guarantee zero main-thread blockages.",
      "Implemented a three-tier transaction resolution pipeline in Android utilizing a local Room SQLite cache, an NLP-based text classifier, and a Human-in-the-Loop (HITL) bottom sheet UI, allowing the system to permanently adapt to manual user category corrections with O(1) lookup latency.",
      "Built a FastAPI machine learning inference backend hosting a weighted ensemble of an XGBoost Classifier (40+ features) and a high-precision Logistic Regression model; resolved a severe class imbalance (4.21% base fraud rate) in the 30,000-row master dataset using BorderlineSMOTE strictly post-split to guarantee test partition integrity.",
      "Achieved empirical performance metrics of 0.8851 ROC-AUC and 0.5303 PR-AUC (12.6× above random baseline) with 100% precision at the default threshold; integrated SHAP (SHapley Additive exPlanations) values to decompose classification decisions into auditable, feature-level attributions.",
      "Designed a premium, reactive user dashboard featuring custom Canvas-drawn category donut charts, a monthly side-by-side cash flow (Income vs. Expenses) bar graph, and a robust PDF/CSV report generation flow shared via Android's native FileProvider share sheets."
    ],
    icon: "bx-shield",
    github: "https://github.com/chapranishika/PaySense-UPIFraud-Detection"
  },
  {
    id: "placement",
    title: "Placement Portal",
    category: "fullstack",
    tags: ["Flask", "SQLAlchemy", "Scikit-Learn", "SQLite", "PostgreSQL"],
    summary: "Engineered an automated career path recommender mapping skills to industry tracks and profile-to-job matching scores. Built recruiter management tools and admin analytical dashboards.",
    bullets: [
      "Student-Side & Placement Journey: Engineered an automated career path recommender that maps student skill profiles to trending industry tracks, offering clear guidance to graduating candidates; created a real-time alignment matcher that displays a percentage-based match score for active listings.",
      "Recruiter & Corporate Hiring Tools: Built recruitment tools that sort and rank student applicants based on skill similarity scores, reducing manual resume review time for recruiters; developed an end-to-end recruitment funnel allowing companies to shortlist, select, or reject candidates, with automatic status updates.",
      "Admin Panel & Campus Analytics: Built a central dashboard tracking student placement rates, drive volume, and identifying the most requested technical skills to align curriculum; established a security protocol requiring administrative review and approval of job listings.",
      "Core Backend & UI Engineering: Designed database schemas using Flask-SQLAlchemy, supporting local SQLite development and seamless migration to PostgreSQL (Supabase) for production; implemented a local matching algorithm using Scikit-Learn (TF-IDF vectorization and Cosine Similarity)."
    ],
    icon: "bx-graduation",
    github: "https://github.com/chapranishika/Placement_Portal"
  },
  {
    id: "zepto",
    title: "Zepto Clone Quick-Commerce",
    category: "fullstack",
    tags: ["React", "FastAPI", "Redis", "LightGBM", "FAISS", "Zustand"],
    summary: "Architected a quick-commerce app using React and FastAPI. Integrated a 3-layer hybrid recommendation engine (TruncatedSVD + Content-Based + LightGBM) to optimize recall.",
    bullets: [
      "Designed and implemented a 3-layer hybrid recommendation engine using Collaborative Filtering (TruncatedSVD), Content-Based Filtering (TF-IDF + FAISS), and a LightGBM LambdaMART re-ranking model, achieving a +17.1% Recall@10 increase over the popularity baseline.",
      "Built a low-latency Approximate Nearest Neighbor (ANN) search index using FAISS to query Sentence-BERT embeddings over a catalog of 5,060 unique products, reducing similar-item retrieval times to sub-10ms.",
      "Developed an implicit feedback pipeline converting user actions (views, clicks, purchases) into confidence weights using log(1 + count) scaling to train collaborative matrix factorization models.",
      "Designed a cold-start resolution layer that seamlessly transitions users from global popularity trends to personalized collaborative recommendations after 5 initial interactions.",
      "Implemented an A/B testing simulation module utilizing MD5 user hashing for deterministic bucketing, calculating sample sizes for statistical significance, and applying sequential testing with Bonferroni correction to prevent false positives.",
      "Integrated LLM-based query expansion and semantic parsing using the Anthropic Claude API to build an interactive AI recipe assistant that parses natural language queries and adds matching ingredients directly to the cart."
    ],
    icon: "bx-cart",
    github: "https://github.com/chapranishika/instantdeliverycloneapp"
  },
  {
    id: "face",
    title: "Secure Face Biometrics Shield",
    category: "ai",
    tags: ["Python", "OpenCV", "MediaPipe", "DeepFace", "SciPy"],
    summary: "Designed a local face registration and verification pipeline combining 5-stage quality checks, 3-layer liveness detection (green-channel rPPG cardiac pulse), and ArcFace matching.",
    bullets: [
      "Designed and built a local-first face registration and login verification pipeline combining 5-stage face quality assessment, 3-layer liveness detection, and deep face matching (ArcFace).",
      "Implemented 3D head pose estimation using OpenCV's solvePnP and MediaPipe's modern Tasks API, resolving mathematical dual-solution ambiguities and coordinate system inversions to enforce precise multi-angle template capture.",
      "Engineered a Remote Photoplethysmography (rPPG) physiological liveness layer using SciPy to capture real-time cardiac pulse signals from forehead green-channel pixel intensities via Butterworth bandpass filters and Fast Fourier Transforms (FFT).",
      "Developed a non-blocking, interactive webcam collection tool with on-screen state menus and face-count validation constraints to compile a custom dataset, achieving 100% sorting accuracy.",
      "Managed data pipelines to cache and sample a balanced development dataset of 5,500+ images across CelebA-Spoof, CFP, and LFW."
    ],
    icon: "bx-user-voice",
    github: "https://github.com/chapranishika/image-liveliness"
  },
  {
    id: "fraud",
    title: "FraudGuard ML Platform",
    category: "ds",
    tags: ["FastAPI", "Supabase", "Optuna", "imblearn", "SHAP"],
    summary: "Engineered a leakage-free fraud detection pipeline on a 6.3M-row PaySim dataset with extreme class imbalance. Achieved a calibrated PR-AUC of 0.071 using Optuna and ADASYN.",
    bullets: [
      "Engineered a leakage-free financial fraud detection pipeline on the 6.3M-row PaySim dataset, achieving a calibrated PR-AUC of 0.071 (142× the random baseline) under extreme class imbalance (1:1,868 fraud ratio).",
      "Developed a Bayesian hyperparameter tuning loop using Optuna and implemented ADASYN oversampling inside cross-validation folds via imblearn.Pipeline to prevent validation set target leakage.",
      "Corrected tree-ensemble probability overconfidence using Isotonic Regression (CalibratedClassifierCV) and integrated local/global SHAP TreeExplainer features to explain real-time transaction risk scoring.",
      "Architected a production-grade FastAPI service using Starlette's run_in_threadpool to offload CPU-bound SHAP calculations, and implemented asyncio.Semaphore(10) to manage batch request concurrency.",
      "Integrated cloud Supabase PostgreSQL for real-time risk alerts (via WebSockets), model drift snapshotting, and a decentralized Model Registry enabling seamless version rollback and discovery.",
      "Designed a dual-platform deployment strategy hosting the static HTML/JS Operations Centre and Live Alerts Dashboard on Vercel, and containerized the FastAPI backend and Streamlit UI on Render."
    ],
    icon: "bx-credit-card",
    github: "https://github.com/chapranishika/Fraudguard"
  },
  {
    id: "myntra",
    title: "Myntra Conversational Stylist",
    category: "ai",
    tags: ["FastAPI", "Gemini 2.0", "ALS", "FAISS", "SSE Streaming"],
    summary: "Architected a multi-stage fashion recommendation engine (Vibezz) on an 8M H&M dataset using BPR and ALS. Developed a Gemini-powered conversational stylist using RAG.",
    bullets: [
      "Architected and trained a multi-stage personalized recommendation engine (Vibezz) on the 8M-transaction H&M dataset, combining Alternating Least Squares (ALS) and Bayesian Personalized Ranking (BPR) to achieve a 7.5x lift in Recall@10 over the popularity baseline.",
      "Designed a listwise LightGBM LambdaRank model to fuse 13 features (latent factors, visual/textual style centroids, price affinity, and forecasting metrics), boosting candidate re-ranking metrics on a temporal split evaluation set.",
      "Built a real-time visual and textual search engine using Inverted File Flat (FAISS IVFFlat) vector indices for sub-5ms retrieval over 105,000 product embeddings.",
      "Developed a conversational AI Stylist powered by Gemini 2.0 Flash using Retrieval-Augmented Generation (RAG) grounded in a custom 37-document fashion rules database.",
      "Implemented client-side function calling exposing recommendation, trending, and style explanation APIs directly to the LLM, enabling interactive multi-turn user experiences.",
      "Wired up a Server-Sent Events (SSE) streaming API on FastAPI to deliver token-by-token chatbot responses, significantly improving user engagement metrics.",
      "Optimized API latency by 99% by precomputing SHAP TreeExplainer feature attributions offline and caching them in a Parquet store, reducing runtime explanation latency from 3s to <1ms."
    ],
    icon: "bx-closet",
    github: "https://github.com/chapranishika/Vibezz-Fashionmind"
  },
  {
    id: "heavy-equipment",
    title: "Heavy Equipment Price Prediction",
    category: "ds",
    tags: ["LightGBM", "CatBoost", "FastAPI", "Vercel", "Python"],
    summary: "Placed in the top 50% globally (Rank #1610) out of 3,200+ teams in a Kaggle machine learning challenge, ensembling tuned LightGBM and CatBoost models. Deployed a dynamic dashboard on Vercel.",
    bullets: [
      "Placed in the top 50% globally (Rank #1610) out of 3,200+ teams in a machine learning challenge, achieving a competitive 0.198 RMSLE by designing and ensembling tuned LightGBM (80%) and CatBoost (20%) models on a dataset of 138K+ transaction records.",
      "Eliminated category dimensionality bottlenecks and prevented target leakage across high-cardinality metadata (100+ classes), securing stable gradient convergence during K-fold validation by implementing a leakage-free 5-Fold Out-of-Fold (OOF) target encoding pipeline and engineering physical wear features (MachineAge, HoursPerYear).",
      "Enhanced model interpretability and stakeholder alignment for non-technical users, rendering dynamic pricing breakdowns instantly by building and deploying an interactive dashboard on Vercel that replicates the ensembled log-space depreciation formulas and visualizes value-decay curves via real-time SVG charting."
    ],
    icon: "bx-trending-up",
    github: "https://github.com/chapranishika/heavy-equipment-price-prediction",
    live: "https://heavy-equipment-price-prediction-kaggle.vercel.app"
  }
];

window.projectsData = projectsData;
