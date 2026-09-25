/**
 * ANAS PORTFOLIO — INTERACTIVE ENGINE
 * Parallax Controller, Brutalist Media Cinema Lightbox, Web Audio Ambient Synthesizer,
 * Filter System, Dynamic Cursor & Telemetry Engine.
 */

// ==========================================
// 1. COMPREHENSIVE MEDIA ARCHIVE CATALOG (26 ENTRIES)
// ==========================================
const ARCHIVE_CATALOG = [
  // 16 CINEMATOGRAPHY REELS
  {
    id: 0,
    type: 'video',
    src: 'videos/Video-67362.mp4',
    poster: 'videos/thumbnails/Video-67362_thumb.jpg',
    category: 'video heritage',
    tag: 'HERITAGE // RITUAL',
    badge: 'REEL_01 // 4K',
    title: 'SANCTUM MARBLE ELEVATION',
    subtitle: 'Ceremonial white marble temple quadrangle and assembly in sacred sunlight.',
    duration: '00:20',
    tech: ['H.264 MASTER', '1276x718', '60 FPS', 'SACRED SANCTUM']
  },
  {
    id: 1,
    type: 'video',
    src: 'videos/IMG_0759.MOV',
    poster: 'videos/thumbnails/IMG_0759_thumb.jpg',
    category: 'video marine',
    tag: 'MARINE // KINETIC',
    badge: 'REEL_02 // 4K 60FPS',
    title: 'COASTAL CLIFFS & SEA GULL FLOCK',
    subtitle: 'Aerial flock dynamics skimming limestone cliffs amidst breaking surf.',
    duration: '00:04',
    tech: ['PRORES LOG', '2160x3840 4K', '60.00 FPS', 'HIGH SHUTTER']
  },
  {
    id: 2,
    type: 'video',
    src: 'videos/IMG_0800.MOV',
    poster: 'videos/thumbnails/IMG_0800_thumb.jpg',
    category: 'video marine',
    tag: 'MARINE // SURGE',
    badge: 'REEL_03 // 4K',
    title: 'OCEAN SWELL & TIDAL FRACTURE',
    subtitle: 'Violent hydraulic compression over submerged fossilized reef beds.',
    duration: '00:05',
    tech: ['ULTRA HD', '2160x3840', 'HIGH SPEED', 'NATURAL LIGHT']
  },
  {
    id: 3,
    type: 'video',
    src: 'videos/IMG_3019.MOV',
    poster: 'videos/thumbnails/IMG_3019_thumb.jpg',
    category: 'video heritage',
    tag: 'HERITAGE // MONUMENT',
    badge: 'REEL_04 // 4K',
    title: 'STONE ALCOVE & ROOSTING AVIAN',
    subtitle: 'Centuries-old weathered sandstone corbels sheltering feral pigeons.',
    duration: '00:03',
    tech: ['TELEPHOTO', '2160x3840', 'OPTICAL ZOOM', 'ARCHIVE 4K']
  },
  {
    id: 4,
    type: 'video',
    src: 'videos/IMG_0734.MOV',
    poster: 'videos/thumbnails/IMG_0734_thumb.jpg',
    category: 'video marine',
    tag: 'MARINE // EXPEDITION',
    badge: 'REEL_05 // 4K 60FPS',
    title: 'SHORELINE EXPEDITION VISTA',
    subtitle: 'Sweeping pan of expansive horizon, sea foam contours, and rugged shoreline.',
    duration: '00:14',
    tech: ['WIDE ANGLE', '2160x3840', '81.3 MB RAW', 'NATURAL SURF']
  },
  {
    id: 5,
    type: 'video',
    src: 'videos/IMG_0879.MOV',
    poster: 'videos/thumbnails/IMG_0879_thumb.jpg',
    category: 'video marine',
    tag: 'MARINE // DYNAMICS',
    badge: 'REEL_06 // 4K',
    title: 'TIDAL RESURGENCE & RECESSION',
    subtitle: 'High-speed capture of saltwater froth receding through rocky crevices.',
    duration: '00:09',
    tech: ['4K CINEMA', '2160x3840', 'DYNAMIC SHUTTER', 'OCEAN LOG']
  },
  {
    id: 6,
    type: 'video',
    src: 'videos/IMG_2680.MOV',
    poster: 'videos/thumbnails/IMG_2680_thumb.jpg',
    category: 'video nocturnal',
    tag: 'DOCUMENTARY // CONTINUUM',
    badge: 'REEL_07 // 4K MASTER',
    title: 'THE PASSAGE // ATMOSPHERIC DRIFT',
    subtitle: 'Long-take spatial steadicam motion tracking atmospheric architecture.',
    duration: '00:17',
    tech: ['PRORES LOG', '2160x3840', '108.6 MB MASTER', 'GIMBAL TRACK']
  },
  {
    id: 7,
    type: 'video',
    src: 'videos/IMG_2890.MOV',
    poster: 'videos/thumbnails/IMG_2890_thumb.jpg',
    category: 'video heritage',
    tag: 'URBAN // ARCHIVE',
    badge: 'REEL_08 // HD 60FPS',
    title: 'SPATIAL ENCLOSURE STUDY',
    subtitle: 'Architectural framing capturing spatial depth and human scale.',
    duration: '00:14',
    tech: ['HD CINEMA', '1080x1920', '60 FPS', 'NATURAL LIGHT']
  },
  {
    id: 8,
    type: 'video',
    src: 'videos/IMG_3377.MOV',
    poster: 'videos/thumbnails/IMG_3377_thumb.jpg',
    category: 'video heritage',
    tag: 'HERITAGE // EXTENDED',
    badge: 'REEL_09 // FEATURE LENGTH',
    title: 'CHRONICLES OF MONUMENT',
    subtitle: 'Extended documentary shot unveiling ancient craftsmanship and stone geometry.',
    duration: '00:37',
    tech: ['DOCUMENTARY', '1080x1920', '105 MB MASTER', 'HERITAGE CORE']
  },
  {
    id: 9,
    type: 'video',
    src: 'videos/IMG_5926.MOV',
    poster: 'videos/thumbnails/IMG_5926_thumb.jpg',
    category: 'video documentary',
    tag: 'DOCUMENTARY // STREET',
    badge: 'REEL_10 // 4K',
    title: 'STREET TEMPO & TEXTURE',
    subtitle: 'High kinetic cadence capturing raw street dynamism and cultural pulse.',
    duration: '00:08',
    tech: ['4K MASTER', '2160x3840', 'STREET RIG', 'RAPID MOTION']
  },
  {
    id: 10,
    type: 'video',
    src: 'videos/IMG_6584.MOV',
    poster: 'videos/thumbnails/IMG_6584_thumb.jpg',
    category: 'video documentary',
    tag: 'CINEMA // DIRECTION',
    badge: 'REEL_11 // 4K 60FPS',
    title: 'KINETIC CONTINUUM SEQUENCE',
    subtitle: 'Fluid spatial tracking examining environmental lighting transitions.',
    duration: '00:20',
    tech: ['4K LOG', '2160x3840', '126 MB FILE', 'CONTINUOUS RIG']
  },
  {
    id: 11,
    type: 'video',
    src: 'videos/IMG_6851.mov',
    poster: 'videos/thumbnails/IMG_6851_thumb.jpg',
    category: 'video nocturne',
    tag: 'NOCTURNE // LIGHT ART',
    badge: 'REEL_12 // 4K LOW-LIGHT',
    title: 'NOCTURNAL VORTEX I',
    subtitle: 'Kinetic light ribbons slicing pure darkness in an immersive ambient display.',
    duration: '00:28',
    tech: ['4K SENSOR', '2160x3840', 'NIGHT LOG', 'KINETIC RAY']
  },
  {
    id: 12,
    type: 'video',
    src: 'videos/IMG_6867.mov',
    poster: 'videos/thumbnails/IMG_6867_thumb.jpg',
    category: 'video nocturne',
    tag: 'NOCTURNE // PRISM',
    badge: 'REEL_13 // 4K 60FPS',
    title: 'NOCTURNAL VORTEX II',
    subtitle: 'High dynamic range study of radiant spoke canopies piercing the night sky.',
    duration: '00:28',
    tech: ['4K MASTER', '2160x3840', '127 MB MASTER', 'OPTICAL PRISM']
  },
  {
    id: 13,
    type: 'video',
    src: 'videos/copy_3A8FA5E9-28DE-44FA-A1A4-0137FE3E9D8E.mov',
    poster: 'videos/thumbnails/copy_3A8FA5E9-28DE-44FA-A1A4-0137FE3E9D8E_thumb.jpg',
    category: 'video documentary',
    tag: 'TRAVEL // TRANSIT',
    badge: 'REEL_14 // HD',
    title: 'PASSING HORIZONS & VISTAS',
    subtitle: 'Dynamic motion perspective traversing varied regional topography.',
    duration: '00:22',
    tech: ['HD 60FPS', '1080x1920', 'STEADY TRACK', 'HORIZON CADENCE']
  },
  {
    id: 14,
    type: 'video',
    src: 'videos/copy_44B5F516-1AED-4A9F-AA06-F5B360F81984.MOV',
    poster: 'videos/thumbnails/copy_44B5F516-1AED-4A9F-AA06-F5B360F81984_thumb.jpg',
    category: 'video heritage',
    tag: 'HERITAGE // GEOMETRY',
    badge: 'REEL_15 // 4K RAW',
    title: 'SACRED ARCHITECTURAL ELEVATIONS',
    subtitle: 'Sweeping vertical tilt along carved monumental sandstone façades.',
    duration: '00:20',
    tech: ['4K CINEMA', '2160x3840', '58.2 MB FILE', 'ARCHITECTURAL TILT']
  },
  {
    id: 15,
    type: 'video',
    src: 'videos/copy_8F61E892-AC9C-4581-95AE-9C2674804CE5.mov',
    poster: 'videos/thumbnails/copy_8F61E892-AC9C-4581-95AE-9C2674804CE5_thumb.jpg',
    category: 'video documentary',
    tag: 'CULTURE // DEVOTION',
    badge: 'REEL_16 // HD',
    title: 'RHYTHMS OF CEREMONY',
    subtitle: 'Dynamic collective gathering with traditional banners and devotional chanting.',
    duration: '00:18',
    tech: ['HD 60FPS', '1080x1920', 'DOCUMENTARY', 'CULTURAL CADENCE']
  },

  // 10 PHOTOGRAPHIC STILL MONOGRAPHS
  {
    id: 16,
    type: 'photo',
    src: 'images/IMG_1167_Original.jpg',
    poster: 'images/IMG_1167_Original.jpg',
    category: 'photo heritage',
    tag: 'CULTURE // CHOREOGRAPHY',
    badge: 'PLATE_01 // 48MP RAW',
    title: 'CHOREOGRAPHY OF DEVOTION',
    subtitle: 'Classical temple dancers in pleated silks, poised in synchronized mudra geometry.',
    duration: 'STILL',
    tech: ['F/1.6 • 1/120s', 'ISO 80', '3024x4032 RAW', 'TEMPLE COURTYARD']
  },
  {
    id: 17,
    type: 'photo',
    src: 'images/IMG_1172_Original.jpg',
    poster: 'images/IMG_1172_Original.jpg',
    category: 'photo heritage',
    tag: 'CULTURE // EXPRESSION',
    badge: 'PLATE_02 // RAW',
    title: 'GESTURE & SACRED FORM',
    subtitle: 'Dramatic portraiture of classical dancers during the festive courtyard procession.',
    duration: 'STILL',
    tech: ['F/1.6 • 1/125s', 'ISO 64', '3024x4032 RAW', 'MUDRA DETAIL']
  },
  {
    id: 18,
    type: 'photo',
    src: 'images/IMG_3136.jpg',
    poster: 'images/IMG_3136.jpg',
    category: 'photo heritage',
    tag: 'MUGHAL // ARCHITECTURE',
    badge: 'PLATE_03 // 48MP ULTRA-RES',
    title: 'DARWAZA-I-RAUZA GATEWAY',
    subtitle: 'The colossal red sandstone gateway to the Taj Mahal complex, framing ancient iwans.',
    duration: 'STILL',
    tech: ['F/1.8 • 1/1400s', 'ISO 50', '4284x5712 RAW', 'AGRA, INDIA']
  },
  {
    id: 19,
    type: 'photo',
    src: 'images/IMG_3160.jpg',
    poster: 'images/IMG_3160.jpg',
    category: 'photo heritage',
    tag: 'MUGHAL // SYMMETRY',
    badge: 'PLATE_04 // 48MP',
    title: 'THE IMPERIAL SPAN',
    subtitle: 'Sandstone chattris, white marble domes, and verdant lawns stretching across the courtyard.',
    duration: 'STILL',
    tech: ['F/1.8 • 1/2100s', 'ISO 50', '4284x5712 RAW', 'IMPERIAL SYMMETRY']
  },
  {
    id: 20,
    type: 'photo',
    src: 'images/IMG_3170_Original.jpg',
    poster: 'images/IMG_3170_Original.jpg',
    category: 'photo heritage',
    tag: 'HERITAGE // SCAFFOLD',
    badge: 'PLATE_05 // HIGH-CONTRAST',
    title: 'MARBLE MONUMENT & STEEL SCAFFOLD',
    subtitle: 'Intricate Quranic calligraphy and Makrana marble juxtaposed against modular restoration grid.',
    duration: 'STILL',
    tech: ['F/1.6 • 1/3200s', 'ISO 64', '3024x4032', 'TAJ MAHAL CONSERVATION']
  },
  {
    id: 21,
    type: 'photo',
    src: 'images/IMG_3300.JPG',
    poster: 'images/IMG_3300.JPG',
    category: 'photo brut',
    tag: 'BRUTALISM // MONOLITH',
    badge: 'PLATE_06 // BRUTALIST',
    title: 'CHRONOS CONCRETE MONOLITH',
    subtitle: 'Angular brutalist concrete tower with illuminated clock face puncturing dusky gloom.',
    duration: 'STILL',
    tech: ['F/1.6 • 1/60s', 'ISO 125', '3024x4032 RAW', 'MONOLITH TOWER']
  },
  {
    id: 22,
    type: 'photo',
    src: 'images/IMG_3663.JPG',
    poster: 'images/IMG_3663.JPG',
    category: 'photo nocturne',
    tag: 'NOCTURNE // GEOMETRIC',
    badge: 'PLATE_07 // NOCTURNE',
    title: 'RADIAL ILLUMINATION SPOKES',
    subtitle: 'Spoke-wheel geometric light web exploding out into black void.',
    duration: 'STILL',
    tech: ['F/1.6 • 1/25s', 'ISO 640', '3024x4032 RAW', 'OBSIDIAN VOID']
  },
  {
    id: 23,
    type: 'photo',
    src: 'images/IMG_3676.JPG',
    poster: 'images/IMG_3676.JPG',
    category: 'photo nocturne',
    tag: 'LIGHT // CANOPY',
    badge: 'PLATE_08 // TENSION',
    title: 'TENSILE CANOPY SPECTRA I',
    subtitle: 'Suspended festival drapery illuminated by sequential micro-luminaire strings.',
    duration: 'STILL',
    tech: ['F/1.6 • 1/20s', 'ISO 800', '3024x4032 RAW', 'TENSILE RIBBONS']
  },
  {
    id: 24,
    type: 'photo',
    src: 'images/IMG_3677.JPG',
    poster: 'images/IMG_3677.JPG',
    category: 'photo nocturne',
    tag: 'LIGHT // CANOPY',
    badge: 'PLATE_09 // LOW LIGHT',
    title: 'TENSILE CANOPY SPECTRA II',
    subtitle: 'Angular counter-perspective highlighting architectural suspension wires and radial symmetry.',
    duration: 'STILL',
    tech: ['F/1.6 • 1/20s', 'ISO 800', '3024x4032 RAW', 'NIGHT EXPOSURE']
  },
  {
    id: 25,
    type: 'photo',
    src: 'images/IMG_5280.JPG',
    poster: 'images/IMG_5280.JPG',
    category: 'photo heritage',
    tag: 'HERITAGE // SARACENIC',
    badge: 'PLATE_10 // HERITAGE',
    title: 'COLONIAL DOME & SICKLE BANNER',
    subtitle: 'Ornate stone cupolas, arches, and blowing pennant framed by wispy cirrus cloud striations.',
    duration: 'STILL',
    tech: ['F/1.6 • 1/1500s', 'ISO 50', '3024x4032 RAW', 'SARACENIC DOME']
  }
];

// Current State
let currentModalIndex = 0;
let isAudioPlaying = false;
let audioContext = null;
let masterGain = null;
let currentFilter = 'all';

// ==========================================
// 2. DOM INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initParallaxEngine();
  initHoverTelemetry();
  initCinemaModal();
  initFilterSystem();
  initHeaderHud();
  initThemeToggle();
  initAudioSynthesizer();
  initDockScrollSpy();
});

// ==========================================
// 3. BRUTALIST CROSSHAIR CURSOR ENGINE
// ==========================================
function initCursor() {
  const dot = document.getElementById('cursorDot');
  const follower = document.getElementById('cursorFollower');
  const lensText = document.getElementById('cursorLensText');
  if (!dot || !follower) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;

    // Update global card glow coordinates
    document.querySelectorAll('.media-card').forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });

  function renderFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;
    requestAnimationFrame(renderFollower);
  }
  requestAnimationFrame(renderFollower);

  // Hover states for media
  document.querySelectorAll('.media-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      follower.classList.add('hover-media');
      const isVid = card.dataset.type === 'video';
      if (lensText) lensText.textContent = isVid ? 'PLAY' : 'ZOOM';
    });
    card.addEventListener('mouseleave', () => {
      follower.classList.remove('hover-media');
    });
  });

  // Hover states for buttons & links
  document.querySelectorAll('button, a, input, select, textarea').forEach((el) => {
    el.addEventListener('mouseenter', () => follower.classList.add('hover-interactive'));
    el.addEventListener('mouseleave', () => follower.classList.remove('hover-interactive'));
  });
}

// ==========================================
// 4. MULTI-LAYER PARALLAX ENGINE
// ==========================================
function initParallaxEngine() {
  const parallaxElements = document.querySelectorAll('[data-parallax-speed]');
  const innerParallaxItems = document.querySelectorAll('[data-parallax-inner]');
  const mouseParallaxItems = document.querySelectorAll('[data-mouse-parallax]');

  // Scroll Parallax
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;

        // Speed-based translation
        parallaxElements.forEach((el) => {
          const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0;
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = (scrolled - (el.offsetTop || 0)) * speed;
            el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
          }
        });

        // Inner Card Image Parallax
        innerParallaxItems.forEach((inner) => {
          const rect = inner.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            const translateY = (progress - 0.5) * 35; // Subtle shift
            const media = inner.querySelector('img, video');
            if (media) {
              media.style.transform = `scale(1.06) translate3d(0, ${translateY.toFixed(1)}px, 0)`;
            }
          }
        });

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Mouse Movement 3D Tilt Parallax on Hero
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (e.clientX - centerX) / centerX;
      const deltaY = (e.clientY - centerY) / centerY;

      mouseParallaxItems.forEach((item) => {
        const factor = parseFloat(item.getAttribute('data-mouse-parallax')) || 10;
        const moveX = deltaX * factor;
        const moveY = deltaY * factor;
        item.style.transform = `translate3d(${moveX.toFixed(1)}px, ${moveY.toFixed(1)}px, 0)`;
      });

      // 3D card tilt
      const heroCard = heroSection.querySelector('.hero-glass-card');
      if (heroCard) {
        const rotateY = deltaX * 7;
        const rotateX = -deltaY * 7;
        heroCard.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(10px)`;
      }
    });

    heroSection.addEventListener('mouseleave', () => {
      mouseParallaxItems.forEach((item) => {
        item.style.transform = 'translate3d(0, 0, 0)';
      });
      const heroCard = heroSection.querySelector('.hero-glass-card');
      if (heroCard) {
        heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      }
    });
  }
}

// ==========================================
// 5. VIDEO HOVER TELEMETRY ENGINE
// ==========================================
function initHoverTelemetry() {
  const videoCards = document.querySelectorAll('.video-card');

  videoCards.forEach((card) => {
    const video = card.querySelector('video');
    if (!video) return;

    let hoverTimeout;

    card.addEventListener('mouseenter', () => {
      hoverTimeout = setTimeout(() => {
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play was prevented; fallback safely
          });
        }
      }, 100);
    });

    card.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimeout);
      video.pause();
      video.currentTime = 0;
    });
  });
}

// ==========================================
// 6. FULLSCREEN GLASS CINEMA LIGHTBOX MODAL
// ==========================================
function initCinemaModal() {
  const modal = document.getElementById('cinemaModal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalClose');
  const canvas = document.getElementById('modalMediaCanvas');
  const prevBtn = document.getElementById('modalPrevBtn');
  const nextBtn = document.getElementById('modalNextBtn');
  const titleEl = document.getElementById('modalTitle');
  const badgeEl = document.getElementById('modalBadge');
  const counterEl = document.getElementById('modalCounter');
  const techEl = document.getElementById('modalTechDetails');
  const controlsEl = document.getElementById('modalVideoControls');
  const playPauseBtn = document.getElementById('modalPlayPauseBtn');
  const playPauseIcon = document.getElementById('playPauseIcon');
  const currentTimeEl = document.getElementById('modalCurrentTime');
  const durationEl = document.getElementById('modalDuration');
  const scrubberTrack = document.getElementById('modalScrubberTrack');
  const scrubberFill = document.getElementById('modalScrubberFill');
  const muteBtn = document.getElementById('modalMuteBtn');
  const muteIcon = document.getElementById('modalMuteIcon');
  const fsBtn = document.getElementById('modalFullscreenBtn');
  const filterBtn = document.getElementById('modalFilterToggle');
  const filterText = document.getElementById('modalFilterText');

  if (!modal || !canvas) return;

  // Bind Click to all media cards
  document.querySelectorAll('.media-card').forEach((card) => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      openModal(idx);
    });
  });

  function openModal(index) {
    if (index < 0) index = ARCHIVE_CATALOG.length - 1;
    if (index >= ARCHIVE_CATALOG.length) index = 0;
    currentModalIndex = index;

    const item = ARCHIVE_CATALOG[index];
    if (!item) return;

    // Set Info
    titleEl.textContent = item.title;
    badgeEl.textContent = item.badge;
    counterEl.textContent = `${String(index + 1).padStart(2, '0')} / ${String(ARCHIVE_CATALOG.length).padStart(2, '0')}`;

    // Render Tech Specs
    techEl.innerHTML = '';
    item.tech.forEach((t) => {
      const span = document.createElement('span');
      span.textContent = t;
      techEl.appendChild(span);
    });

    // Populate Canvas
    canvas.innerHTML = '';
    if (item.type === 'video') {
      controlsEl.style.display = 'flex';
      const video = document.createElement('video');
      video.src = item.src;
      video.poster = item.poster;
      video.autoplay = true;
      video.loop = true;
      video.playsInline = true;
      video.id = 'modalActiveVideo';

      // Attach scrubber & time listeners
      video.addEventListener('timeupdate', () => {
        if (!video.duration) return;
        const progress = (video.currentTime / video.duration) * 100;
        scrubberFill.style.width = `${progress}%`;
        currentTimeEl.textContent = formatTime(video.currentTime);
        durationEl.textContent = formatTime(video.duration);
      });

      video.addEventListener('play', () => {
        playPauseIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
      });

      video.addEventListener('pause', () => {
        playPauseIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
      });

      canvas.appendChild(video);
      video.play().catch(() => {});
    } else {
      controlsEl.style.display = 'none';
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.title;
      img.id = 'modalActiveImage';
      canvas.appendChild(img);
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    const activeVid = document.getElementById('modalActiveVideo');
    if (activeVid) {
      activeVid.pause();
      activeVid.src = '';
    }
    canvas.innerHTML = '';
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // Play / Pause toggle
  playPauseBtn.addEventListener('click', () => {
    const vid = document.getElementById('modalActiveVideo');
    if (!vid) return;
    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  });

  // Mute / Unmute
  muteBtn.addEventListener('click', () => {
    const vid = document.getElementById('modalActiveVideo');
    if (!vid) return;
    vid.muted = !vid.muted;
    muteIcon.textContent = vid.muted ? '🔇' : '🔊';
  });

  // Scrubber click
  scrubberTrack.addEventListener('click', (e) => {
    const vid = document.getElementById('modalActiveVideo');
    if (!vid || !vid.duration) return;
    const rect = scrubberTrack.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    vid.currentTime = pos * vid.duration;
  });

  // Fullscreen
  fsBtn.addEventListener('click', () => {
    const vid = document.getElementById('modalActiveVideo');
    const img = document.getElementById('modalActiveImage');
    const target = vid || img;
    if (!target) return;
    if (target.requestFullscreen) {
      target.requestFullscreen();
    }
  });

  // Filter toggle in modal
  let isModalBw = true;
  filterBtn.addEventListener('click', () => {
    isModalBw = !isModalBw;
    canvas.style.filter = isModalBw ? 'grayscale(100%) contrast(115%)' : 'none';
    filterText.innerHTML = isModalBw ? 'FILTER: <strong>B&amp;W</strong>' : 'FILTER: <strong>SPECTRUM</strong>';
  });

  // Navigation events
  prevBtn.addEventListener('click', () => openModal(currentModalIndex - 1));
  nextBtn.addEventListener('click', () => openModal(currentModalIndex + 1));
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') openModal(currentModalIndex - 1);
    if (e.key === 'ArrowRight') openModal(currentModalIndex + 1);
    if (e.key === ' ') {
      e.preventDefault();
      const vid = document.getElementById('modalActiveVideo');
      if (vid) {
        if (vid.paused) vid.play();
        else vid.pause();
      }
    }
  });
}

// ==========================================
// 7. ARCHIVE FILTERING & VIEW MODES
// ==========================================
function initFilterSystem() {
  const pills = document.querySelectorAll('.pill-btn');
  const mediaCards = document.querySelectorAll('.media-card');
  const countLabel = document.getElementById('activeCountLabel');
  const viewBtns = document.querySelectorAll('.view-btn');

  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');
      currentFilter = filter;
      let visibleCount = 0;

      mediaCards.forEach((card) => {
        const cat = card.getAttribute('data-category') || '';
        const type = card.getAttribute('data-type') || '';

        let match = false;
        if (filter === 'all') {
          match = true;
        } else if (filter === 'video' && type === 'video') {
          match = true;
        } else if (filter === 'photo' && type === 'photo') {
          match = true;
        } else if (cat.includes(filter)) {
          match = true;
        }

        if (match) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (countLabel) {
        countLabel.textContent = `DISPLAYING ${visibleCount} / 26 ENTRIES`;
      }
    });
  });

  // View modes: Grid vs List
  viewBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      viewBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-view-mode');
      document.body.setAttribute('data-view', mode);
    });
  });
}

// ==========================================
// 8. LIVE TIMECODE & HEADER HUD
// ==========================================
function initHeaderHud() {
  const tcEl = document.getElementById('liveTimecode');
  if (!tcEl) return;

  let frames = 0;
  setInterval(() => {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    frames = (frames + 1) % 60;
    const f = String(frames).padStart(2, '0');
    tcEl.textContent = `${h}:${m}:${s}:${f}`;
  }, 1000 / 60);
}

// ==========================================
// 9. MONOCHROME / SPECTRUM MODE TOGGLE
// ==========================================
function initThemeToggle() {
  const modeBtn = document.getElementById('modeToggle');
  const modeLabel = document.getElementById('modeLabel');
  if (!modeBtn || !modeLabel) return;

  let isBw = true;
  modeBtn.addEventListener('click', () => {
    isBw = !isBw;
    if (isBw) {
      document.body.classList.remove('theme-spectrum');
      document.body.classList.add('theme-monochrome');
      modeLabel.textContent = 'B&W';
    } else {
      document.body.classList.remove('theme-monochrome');
      document.body.classList.add('theme-spectrum');
      modeLabel.textContent = 'SPECTRUM';
    }
  });
}

// ==========================================
// 10. WEB AUDIO AMBIENT SOUNDSCAPE SYNTHESIZER
// ==========================================
function initAudioSynthesizer() {
  const audioBtn = document.getElementById('audioToggle');
  const soundState = document.getElementById('soundState');
  const audioWave = document.getElementById('audioWave');
  if (!audioBtn) return;

  let droneOsc1 = null;
  let droneOsc2 = null;
  let noiseNode = null;
  let filter = null;

  function startDrone() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioContextClass();

      masterGain = audioContext.createGain();
      masterGain.gain.setValueAtTime(0.001, audioContext.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.2, audioContext.currentTime + 3);
      masterGain.connect(audioContext.destination);

      // Low sub drone (55Hz - A1)
      droneOsc1 = audioContext.createOscillator();
      droneOsc1.type = 'sine';
      droneOsc1.frequency.setValueAtTime(55, audioContext.currentTime);

      // Harmonic fifth drone (82.4Hz - E2)
      droneOsc2 = audioContext.createOscillator();
      droneOsc2.type = 'triangle';
      droneOsc2.frequency.setValueAtTime(82.4, audioContext.currentTime);

      // Low-pass filter for dark cinema atmosphere
      filter = audioContext.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(280, audioContext.currentTime);
      filter.Q.setValueAtTime(3, audioContext.currentTime);

      droneOsc1.connect(filter);
      droneOsc2.connect(filter);
      filter.connect(masterGain);

      droneOsc1.start();
      droneOsc2.start();

      isAudioPlaying = true;
      soundState.textContent = 'ON';
      audioWave.classList.add('active');
    } catch (e) {
      console.warn('Web Audio Ambient Synthesizer initialisation error:', e);
    }
  }

  function stopDrone() {
    if (!audioContext || !masterGain) return;
    masterGain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 1.2);
    setTimeout(() => {
      if (droneOsc1) droneOsc1.stop();
      if (droneOsc2) droneOsc2.stop();
      if (audioContext && audioContext.state !== 'closed') audioContext.close();
      isAudioPlaying = false;
      soundState.textContent = 'OFF';
      audioWave.classList.remove('active');
    }, 1200);
  }

  audioBtn.addEventListener('click', () => {
    if (!isAudioPlaying) {
      startDrone();
    } else {
      stopDrone();
    }
  });
}

// ==========================================
// 11. DOCK SCROLL SPY NAVIGATION
// ==========================================
function initDockScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const dockLinks = document.querySelectorAll('.dock-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const top = section.offsetTop - 180;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        dockLinks.forEach((link) => {
          if (link.getAttribute('data-target') === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { passive: true });
}

// ==========================================
// 12. CONTACT FORM TRANSMISSION
// ==========================================
function showFormSuccess() {
  const successBox = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');
  if (successBox) {
    successBox.classList.add('show');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.5';
    }
    setTimeout(() => {
      const form = document.getElementById('contactForm');
      if (form) form.reset();
      successBox.classList.remove('show');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
      }
    }, 6000);
  }
}
window.showFormSuccess = showFormSuccess;
