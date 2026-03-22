(function () {
  //  Color palette
  const COLOR = {
    black: '#000000',
    white: '#ffffff',
    transparent: 'transparent',
    current: 'currentColor',
    'slate-50': '#f8fafc',
    'slate-100': '#f1f5f9',
    'slate-200': '#e2e8f0',
    'slate-300': '#cbd5e1',
    'slate-400': '#94a3b8',
    'slate-500': '#64748b',
    'slate-600': '#475569',
    'slate-700': '#334155',
    'slate-800': '#1e293b',
    'slate-900': '#0f172a',
    'gray-50': '#f9fafb',
    'gray-100': '#f3f4f6',
    'gray-200': '#e5e7eb',
    'gray-300': '#d1d5db',
    'gray-400': '#9ca3af',
    'gray-500': '#6b7280',
    'gray-600': '#4b5563',
    'gray-700': '#374151',
    'gray-800': '#1f2937',
    'gray-900': '#111827',
    'red-50': '#fef2f2',
    'red-100': '#fee2e2',
    'red-200': '#fecaca',
    'red-300': '#fca5a5',
    'red-400': '#f87171',
    'red-500': '#ef4444',
    'red-600': '#dc2626',
    'red-700': '#b91c1c',
    'red-800': '#991b1b',
    'red-900': '#7f1d1d',
    'orange-50': '#fff7ed',
    'orange-100': '#ffedd5',
    'orange-200': '#fed7aa',
    'orange-300': '#fdba74',
    'orange-400': '#fb923c',
    'orange-500': '#f97316',
    'orange-600': '#ea580c',
    'orange-700': '#c2410c',
    'orange-800': '#9a3412',
    'orange-900': '#7c2d12',
    'yellow-50': '#fefce8',
    'yellow-100': '#fef9c3',
    'yellow-200': '#fef08a',
    'yellow-300': '#fde047',
    'yellow-400': '#facc15',
    'yellow-500': '#eab308',
    'yellow-600': '#ca8a04',
    'yellow-700': '#a16207',
    'yellow-800': '#854d0e',
    'yellow-900': '#713f12',
    'green-50': '#f0fdf4',
    'green-100': '#dcfce7',
    'green-200': '#bbf7d0',
    'green-300': '#86efac',
    'green-400': '#4ade80',
    'green-500': '#22c55e',
    'green-600': '#16a34a',
    'green-700': '#15803d',
    'green-800': '#166534',
    'green-900': '#14532d',
    'blue-50': '#eff6ff',
    'blue-100': '#dbeafe',
    'blue-200': '#bfdbfe',
    'blue-300': '#93c5fd',
    'blue-400': '#60a5fa',
    'blue-500': '#3b82f6',
    'blue-600': '#2563eb',
    'blue-700': '#1d4ed8',
    'blue-800': '#1e40af',
    'blue-900': '#1e3a8a',
    'indigo-50': '#eef2ff',
    'indigo-100': '#e0e7ff',
    'indigo-200': '#c7d2fe',
    'indigo-300': '#a5b4fc',
    'indigo-400': '#818cf8',
    'indigo-500': '#6366f1',
    'indigo-600': '#4f46e5',
    'indigo-700': '#4338ca',
    'indigo-800': '#3730a3',
    'indigo-900': '#312e81',
    'purple-50': '#faf5ff',
    'purple-100': '#f3e8ff',
    'purple-200': '#e9d5ff',
    'purple-300': '#d8b4fe',
    'purple-400': '#c084fc',
    'purple-500': '#a855f7',
    'purple-600': '#9333ea',
    'purple-700': '#7e22ce',
    'purple-800': '#6b21a8',
    'purple-900': '#581c87',
    'pink-50': '#fdf2f8',
    'pink-100': '#fce7f3',
    'pink-200': '#fbcfe8',
    'pink-300': '#f9a8d4',
    'pink-400': '#f472b6',
    'pink-500': '#ec4899',
    'pink-600': '#db2777',
    'pink-700': '#be185d',
    'pink-800': '#9d174d',
    'pink-900': '#831843',
    red: '#ef4444',
    blue: '#3b82f6',
    green: '#22c55e',
    yellow: '#eab308',
    gray: '#6b7280',
    pink: '#ec4899',
    purple: '#a855f7',
    orange: '#f97316',
    indigo: '#6366f1',
    teal: '#14b8a6',
    cyan: '#06b6d4',
    lime: '#84cc16',
    emerald: '#10b981',
    violet: '#8b5cf6',
    fuchsia: '#d946ef',
    rose: '#f43f5e',
    sky: '#0ea5e9',
    amber: '#f59e0b',
  };

  //  Helpers
  const px = (v) => (v == null ? '' : isNaN(v) ? v : v + 'px');
  const col = (v) => COLOR[v] || v;
  const isCol = (v) => v in COLOR;
  const isAlign = (v) =>
    v === 'left' || v === 'center' || v === 'right' || v === 'justify';
  const FONT_SIZES = {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem', // 72px
    '8xl': '6rem', // 96px
    '9xl': '8rem', // 128px
  };

  const FONT_WEIGHTS = {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  };

  const LEADING = {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  };
  const TRACKING = {
    tighter: '-0.05em', // ~ -0.8px (relative to font size)
    tight: '-0.025em', // ~ -0.4px
    normal: '0em', // 0px
    wide: '0.025em', // ~ 0.4px
    wider: '0.05em', // ~ 0.8px
    widest: '0.1em', // ~ 1.6px
  };

  const SIZE_SCALE = {
    0: '0px', // 0px
    0.5: '0.125rem', // 2px
    1: '0.25rem', // 4px
    2: '0.5rem', // 8px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    6: '1.5rem', // 24px
    8: '2rem', // 32px
    12: '3rem', // 48px
    16: '4rem', // 64px
    20: '5rem', // 80px
    24: '6rem', // 96px
    32: '8rem', // 128px
    40: '10rem', // 160px
    48: '12rem', // 192px
    56: '14rem', // 224px
    64: '16rem', // 256px
    72: '18rem', // 288px
    80: '20rem', // 320px
    96: '24rem', // 384px
  };

  function sizeVal(v) {
    if (!v) return '';
    const special = {
      full: '100%',
      screen: '100vw',
      vh: '100vh',
      auto: 'auto',
      fit: 'fit-content',
      min: 'min-content',
      max: 'max-content',
    };
    return special[v] || px(v);
  }

  function expandFlex(v) {
    const m = {
      start: 'flex-start',
      end: 'flex-end',
      center: 'center',
      between: 'space-between',
      around: 'space-around',
      evenly: 'space-evenly',
      stretch: 'stretch',
      baseline: 'baseline',
    };
    return m[v] || v;
  }

  function shadow(s) {
    const m = {
      sm: '0 1px 2px rgba(0,0,0,0.05)',
      md: '0 4px 6px rgba(0,0,0,0.1)',
      lg: '0 10px 15px rgba(0,0,0,0.15)',
      xl: '0 20px 25px rgba(0,0,0,0.2)',
      '2xl': '0 25px 50px rgba(0,0,0,0.25)',
      inner: 'inset 0 2px 4px rgba(0,0,0,0.06)',
      none: 'none',
    };
    return m[s] || m.md;
  }

  const EASE = {
    in: 'ease-in',
    out: 'ease-out',
    linear: 'linear',
    'in-out': 'ease-in-out',
  };

  //  Static classes (exact suffix → style mutation)
  // Each value is a function (el) => void  OR  a plain [prop, value] pair.
  // Using a plain pair avoids a closure allocation for the simple cases.
  const EXACT = {
    // Display
    flex: (el) => {
      el.style.display = 'flex';
    },
    block: (el) => {
      el.style.display = 'block';
    },
    inline: (el) => {
      el.style.display = 'inline';
    },
    'inline-block': (el) => {
      el.style.display = 'inline-block';
    },
    'inline-flex': (el) => {
      el.style.display = 'inline-flex';
    },
    grid: (el) => {
      el.style.display = 'grid';
    },
    hidden: (el) => {
      el.style.display = 'none';
    },
    // Flex helpers
    'flex-col': (el) => {
      el.style.flexDirection = 'column';
    },
    'flex-row': (el) => {
      el.style.flexDirection = 'row';
    },
    'flex-wrap': (el) => {
      el.style.flexWrap = 'wrap';
    },
    'flex-nowrap': (el) => {
      el.style.flexWrap = 'nowrap';
    },
    'flex-1': (el) => {
      el.style.flex = '1 1 0%';
    },
    'flex-auto': (el) => {
      el.style.flex = '1 1 auto';
    },
    'flex-none': (el) => {
      el.style.flex = 'none';
    },
    grow: (el) => {
      el.style.flexGrow = '1';
    },
    shrink: (el) => {
      el.style.flexShrink = '1';
    },
    // Position
    relative: (el) => {
      el.style.position = 'relative';
    },
    absolute: (el) => {
      el.style.position = 'absolute';
    },
    fixed: (el) => {
      el.style.position = 'fixed';
    },
    sticky: (el) => {
      el.style.position = 'sticky';
    },
    static: (el) => {
      el.style.position = 'static';
    },
    // Typography
    italic: (el) => {
      el.style.fontStyle = 'italic';
    },
    underline: (el) => {
      el.style.textDecoration = 'underline';
    },
    'line-through': (el) => {
      el.style.textDecoration = 'line-through';
    },
    'no-underline': (el) => {
      el.style.textDecoration = 'none';
    },
    uppercase: (el) => {
      el.style.textTransform = 'uppercase';
    },
    lowercase: (el) => {
      el.style.textTransform = 'lowercase';
    },
    capitalize: (el) => {
      el.style.textTransform = 'capitalize';
    },
    // Borders
    border: (el) => {
      el.style.border = '1px solid black';
    },
    'border-t': (el) => {
      el.style.borderTop = '1px solid black';
    },
    'border-b': (el) => {
      el.style.borderBottom = '1px solid black';
    },
    'border-l': (el) => {
      el.style.borderLeft = '1px solid black';
    },
    'border-r': (el) => {
      el.style.borderRight = '1px solid black';
    },
    rounded: (el) => {
      el.style.borderRadius = '4px';
    },
    'rounded-full': (el) => {
      el.style.borderRadius = '9999px';
    },
    'rounded-none': (el) => {
      el.style.borderRadius = '0';
    },
    // Misc
    visible: (el) => {
      el.style.visibility = 'visible';
    },
    invisible: (el) => {
      el.style.visibility = 'hidden';
    },
    transition: (el) => {
      el.style.transition = 'all 150ms ease';
    },
    'transition-none': (el) => {
      el.style.transition = 'none';
    },
    'overflow-y-auto': (el) => {
      el.style.overflowY = 'auto';
    },
    'overflow-x-auto': (el) => {
      el.style.overflowX = 'auto';
    },
    overflow: (el) => {
      el.style.overflow = 'auto';
    },
    // Bg extras
    'bg-cover': (el) => {
      el.style.backgroundSize = 'cover';
    },
    'bg-contain': (el) => {
      el.style.backgroundSize = 'contain';
    },
    'bg-center': (el) => {
      el.style.backgroundPosition = 'center';
    },
    'bg-no-repeat': (el) => {
      el.style.backgroundRepeat = 'no-repeat';
    },
    // Object fit
    'object-cover': (el) => {
      el.style.objectFit = 'cover';
    },
    'object-contain': (el) => {
      el.style.objectFit = 'contain';
    },
    'object-fill': (el) => {
      el.style.objectFit = 'fill';
    },
    // Aspect
    'aspect-square': (el) => {
      el.style.aspectRatio = '1 / 1';
    },
    'aspect-video': (el) => {
      el.style.aspectRatio = '16 / 9';
    },
    // Whitespace
    'whitespace-nowrap': (el) => {
      el.style.whiteSpace = 'nowrap';
    },
    'whitespace-pre': (el) => {
      el.style.whiteSpace = 'pre';
    },
    'whitespace-normal': (el) => {
      el.style.whiteSpace = 'normal';
    },
    // Pointer / select
    'pointer-none': (el) => {
      el.style.pointerEvents = 'none';
    },
    'pointer-auto': (el) => {
      el.style.pointerEvents = 'auto';
    },
    'select-none': (el) => {
      el.style.userSelect = 'none';
    },
    'select-all': (el) => {
      el.style.userSelect = 'all';
    },
    'select-text': (el) => {
      el.style.userSelect = 'text';
    },
    // List
    'list-none': (el) => {
      el.style.listStyleType = 'none';
    },
    'list-disc': (el) => {
      el.style.listStyleType = 'disc';
    },
    'list-decimal': (el) => {
      el.style.listStyleType = 'decimal';
    },
    // Box
    'box-border': (el) => {
      el.style.boxSizing = 'border-box';
    },
    'box-content': (el) => {
      el.style.boxSizing = 'content-box';
    },
    // Word break
    'break-words': (el) => {
      el.style.overflowWrap = 'break-word';
    },
    'break-all': (el) => {
      el.style.wordBreak = 'break-all';
    },
    'break-normal': (el) => {
      el.style.wordBreak = 'normal';
    },
    // Resize
    resize: (el) => {
      el.style.resize = 'both';
    },
    'resize-x': (el) => {
      el.style.resize = 'horizontal';
    },
    'resize-y': (el) => {
      el.style.resize = 'vertical';
    },
    'resize-none': (el) => {
      el.style.resize = 'none';
    },
    // Outline
    outline: (el) => {
      el.style.outline = 'none';
    },
    'outline-none': (el) => {
      el.style.outline = 'none';
    },
  };

  //  Prefix handlers (suffix without the value part)
  // Each fn receives (el, value, rest) where:
  //   suffix = "px-16"  → prefix="px", value="16", rest=undefined
  //   suffix = "gap-x-8"→ prefix="gap", value="x", rest="8"
  //
  // Organised as a flat object: key = the prefix string before the first "-"
  // that disambiguates the class. Longer compound prefixes (e.g. "gap-x") are
  // checked first via a secondary lookup table (PREFIX2).

  const PREFIX = {
    //  Spacing
    p: (el, v) => {
      el.style.padding = px(v);
    },
    px: (el, v) => {
      el.style.paddingLeft = el.style.paddingRight = px(v);
    },
    py: (el, v) => {
      el.style.paddingTop = el.style.paddingBottom = px(v);
    },
    pt: (el, v) => {
      el.style.paddingTop = px(v);
    },
    pb: (el, v) => {
      el.style.paddingBottom = px(v);
    },
    pl: (el, v) => {
      el.style.paddingLeft = px(v);
    },
    pr: (el, v) => {
      el.style.paddingRight = px(v);
    },
    m: (el, v) => {
      el.style.margin = px(v);
    },
    mx: (el, v) => {
      el.style.marginLeft = el.style.marginRight = px(v);
    },
    my: (el, v) => {
      el.style.marginTop = el.style.marginBottom = px(v);
    },
    mt: (el, v) => {
      el.style.marginTop = px(v);
    },
    mb: (el, v) => {
      el.style.marginBottom = px(v);
    },
    ml: (el, v) => {
      el.style.marginLeft = px(v);
    },
    mr: (el, v) => {
      el.style.marginRight = px(v);
    },
    //  Sizing
    w: (el, v) => {
      el.style.width = sizeVal(v);
    },
    h: (el, v) => {
      el.style.height = sizeVal(v);
    },
    // Colours
    bg: (el, v, rest) => {
      const full = rest ? v + '-' + rest : v;
      el.style.backgroundColor = col(full);
    },
    text: (el, v, rest) => {
      const full = rest ? v + '-' + rest : v;
      if (isAlign(v)) el.style.textAlign = v;
      else if (isCol(full)) el.style.color = col(full);
      else el.style.fontSize = FONT_SIZES[rest || v] || px(v);
    },

    // In PREFIX.font
    font: (el, v) => {
      el.style.fontWeight = FONT_WEIGHTS[v] || v;
    },

    // In PREFIX.leading
    leading: (el, v) => {
      el.style.lineHeight = LEADING[v] || v;
    },

    // In PREFIX.tracking
    tracking: (el, v) => {
      el.style.letterSpacing = TRACKING[v] || px(v);
    },
    //  Border
    border: (el, v, rest) => {
      const full = rest ? v + '-' + rest : v;
      if (!v) el.style.border = '1px solid black';
      else if (isCol(full)) el.style.borderColor = col(full);
      else el.style.border = px(v) + ' solid black';
    },
    rounded: (el, v) => {
      el.style.borderRadius =
        v === 'full' ? '9999px' : v === 'none' ? '0' : px(v);
    },
    //  Layout: flex / grid alignment
    justify: (el, v) => {
      el.style.justifyContent = expandFlex(v);
    },
    items: (el, v) => {
      el.style.alignItems = expandFlex(v);
    },
    content: (el, v) => {
      el.style.alignContent = expandFlex(v);
    },
    place: (el, v) => {
      el.style.placeItems = v;
    },
    self: (el, v) => {
      el.style.alignSelf = v;
    },
    //  Layout: gap
    gap: (el, v) => {
      el.style.gap = px(v);
    },
    //  Layout: grid
    cols: (el, v) => {
      el.style.gridTemplateColumns = `repeat(${v},1fr)`;
    },
    rows: (el, v) => {
      el.style.gridTemplateRows = `repeat(${v},1fr)`;
    },
    //  Position
    top: (el, v) => {
      el.style.top = px(v);
    },
    bottom: (el, v) => {
      el.style.bottom = px(v);
    },
    left: (el, v) => {
      el.style.left = px(v);
    },
    right: (el, v) => {
      el.style.right = px(v);
    },
    inset: (el, v) => {
      el.style.inset = px(v);
    },
    z: (el, v) => {
      el.style.zIndex = v;
    },
    //  Misc
    opacity: (el, v) => {
      el.style.opacity = parseInt(v) / 100;
    },
    shadow: (el, v) => {
      el.style.boxShadow = shadow(v);
    },
    cursor: (el, v) => {
      el.style.cursor = v;
    },
    object: (el, v) => {
      el.style.objectFit = v;
    },
    pointer: (el, v) => {
      el.style.pointerEvents = v;
    },
    select: (el, v) => {
      el.style.userSelect = v;
    },
    list: (el, v) => {
      el.style.listStyleType = v;
    },
    resize: (el, v) => {
      el.style.resize = v;
    },
    aspect: (el, v) => {
      el.style.aspectRatio =
        v === 'square' ? '1/1' : v === 'video' ? '16/9' : v;
    },
    whitespace: (el, v) => {
      el.style.whiteSpace = v;
    },
    outline: (el, v) => {
      el.style.outline = v === 'none' || !v ? 'none' : px(v) + ' solid';
    },
    //  Transition / animation
    transition: (el, v) => {
      el.style.transition = v ? `all ${v}ms ease` : 'all 150ms ease';
    },
    duration: (el, v) => {
      el.style.transitionDuration = v + 'ms';
    },
    ease: (el, v) => {
      el.style.transitionTimingFunction = EASE[v] || v;
    },
    //  Transforms
    rotate: (el, v) => {
      el.style.transform = `rotate(${v}deg)`;
    },
    scale: (el, v) => {
      el.style.transform = `scale(${parseInt(v) / 100})`;
    },
    overflow: (el, v) => {
      el.style.overflow = v;
    },
  };

  //  Two-segment prefix handlers  e.g. "gap-x", "gap-y", "min-w"
  // Key = first two segments joined by "-".
  const PREFIX2 = {
    'gap-x': (el, v) => {
      el.style.columnGap = px(v);
    },
    'gap-y': (el, v) => {
      el.style.rowGap = px(v);
    },
    'min-w': (el, v) => {
      el.style.minWidth = sizeVal(v);
    },
    'min-h': (el, v) => {
      el.style.minHeight = sizeVal(v);
    },
    'max-w': (el, v) => {
      el.style.maxWidth = sizeVal(v);
    },
    'max-h': (el, v) => {
      el.style.maxHeight = sizeVal(v);
    },
    'translate-x': (el, v) => {
      el.style.transform = `translateX(${px(v)})`;
    },
    'translate-y': (el, v) => {
      el.style.transform = `translateY(${px(v)})`;
    },
    'col-span': (el, v) => {
      el.style.gridColumn = `span ${v}`;
    },
    'row-span': (el, v) => {
      el.style.gridRow = `span ${v}`;
    },
    'border-t': (el, v) => {
      el.style.borderTop = `${v || 1}px solid black`;
    },
    'border-b': (el, v) => {
      el.style.borderBottom = `${v || 1}px solid black`;
    },
    'border-l': (el, v) => {
      el.style.borderLeft = `${v || 1}px solid black`;
    },
    'border-r': (el, v) => {
      el.style.borderRight = `${v || 1}px solid black`;
    },
    'overflow-x': (el, v) => {
      el.style.overflowX = v;
    },
    'overflow-y': (el, v) => {
      el.style.overflowY = v;
    },
    'box-sizing': (el, v) => {
      el.style.boxSizing = v;
    },
  };

  //  Core dispatch
  function applyClass(el, suffix) {
    // 1. Exact static match — fastest path

    let negative = false;
    if (suffix[0] === '-') {
      negative = true;
      suffix = suffix.slice(1);
    }
    const exact = EXACT[suffix];
    if (exact) {
      exact(el);
      return;
    }

    // 2. Two-segment prefix match  e.g. "gap-x-8" → key="gap-x", v="8"
    const d2 = suffix.indexOf('-', suffix.indexOf('-') + 1); // second dash
    if (d2 !== -1) {
      const key2 = suffix.slice(0, d2);
      const fn2 = PREFIX2[key2];
      if (fn2) {
        fn2(el, suffix.slice(d2 + 1));
        return;
      }
    }

    // 3. Single-segment prefix match  e.g. "px-16" → key="px", v="16"
    const d1 = suffix.indexOf('-');
    if (d1 !== -1) {
      const key1 = suffix.slice(0, d1);
      const fn1 = PREFIX[key1];
      if (fn1) {
        // Pass the remainder split at the next dash for colour ramps:
        // "bg-red-500" → key="bg", v="red", rest="500"
        const rest = suffix.slice(d1 + 1);
        const d3 = rest.indexOf('-');
        if (d3 !== -1) fn1(el, rest.slice(0, d3), rest.slice(d3 + 1));
        else fn1(el, rest);
        return;
      }
    }

    console.warn('[chai] unrecognised class:', suffix);
  }

  //  Walk the DOM
  function applyChaiStyles(root) {
    // querySelectorAll is fast; iterating classList is cheap per element.
    const els = root.querySelectorAll('[class]');
    for (let i = 0, n = els.length; i < n; i++) {
      const el = els[i];
      const cls = el.classList;
      // Collect chai-* names first (avoid mutating during iteration)
      const toRemove = [];
      for (let j = 0, m = cls.length; j < m; j++) {
        const c = cls[j];
        if (c.charCodeAt(0) === 99 /*c*/ && c.startsWith('chai-')) {
          toRemove.push(c);
        }
      }
      for (let k = 0; k < toRemove.length; k++) {
        applyClass(el, toRemove[k].slice(5)); // strip "chai-"
        el.classList.remove(toRemove[k]);
      }
    }
  }

  //  Boot
  document.addEventListener('DOMContentLoaded', () =>
    applyChaiStyles(document.body)
  );

  //  Dynamic DOM observer
  new MutationObserver((mutations) => {
    for (let i = 0; i < mutations.length; i++) {
      const added = mutations[i].addedNodes;
      for (let j = 0; j < added.length; j++) {
        if (added[j].nodeType === 1) applyChaiStyles(added[j]);
      }
    }
  }).observe(document.body, { childList: true, subtree: true });
})();

const SIDEBAR = [
  {
    title: 'Spacing',
    links: [
      { label: 'Padding', href: '#padding' },
      { label: 'Margin', href: '#margin' },
    ],
  },
  {
    title: 'Color',
    links: [
      { label: 'Background', href: '#bg' },
      { label: 'Text Color', href: '#textcolor' },
    ],
  },
  {
    title: 'Typography',
    links: [
      { label: 'Font Size', href: '#fontsize' },
      { label: 'Font Weight', href: '#fontweight' },
      { label: 'Text Align', href: '#textalign' },
      { label: 'Transform', href: '#texttrans' },
      { label: 'Style & Deco', href: '#textstyle' },
      { label: 'Leading / Tracking', href: '#leading' },
    ],
  },
  {
    title: 'Layout',
    links: [
      { label: 'Display', href: '#display' },
      { label: 'Flexbox', href: '#flexbox' },
      { label: 'Grid', href: '#grid' },
      { label: 'Gap', href: '#gap' },
      { label: 'Sizing', href: '#sizing' },
      { label: 'Position', href: '#position' },
    ],
  },
  {
    title: 'Visual',
    links: [
      { label: 'Border', href: '#border' },
      { label: 'Shadow', href: '#shadow' },
      { label: 'Opacity', href: '#opacity' },
      { label: 'Overflow', href: '#overflow' },
    ],
  },
  {
    title: 'Interactivity',
    links: [
      { label: 'Cursor', href: '#cursor' },
      { label: 'Transform', href: '#transform' },
      { label: 'Transition', href: '#transition' },
    ],
  },
  {
    title: 'Misc',
    links: [
      { label: 'Misc Utilities', href: '#misc' },
      { label: 'Color Palette', href: '#colors' },
    ],
  },
];

const nav = document.querySelector('nav');

nav.innerHTML = SIDEBAR.map(
  (section) => `
  <div class="mono chai-text-slate-500 chai-px-24 chai-pb-6 chai-pt-16 chai-text-10 chai-uppercase chai-tracking-widest"
       >
    ${section.title}
  </div>

  ${section.links
    .map(
      (link) => `
    <a href="${link.href}" 
       class="nav-link chai-text-slate-400 chai-px-24 chai-py-7 chai-text-13">
       ${link.label}
    </a>
  `
    )
    .join('')}
`
).join('');

function renderTbody(tbody, data) {
  tbody.innerHTML = data
    .map(
      (item) => `
    <tr class="ref-row chai-border-b chai-border-slate-100">
      <td class="chai-px-16 chai-py-10">
        <code class="mono chai-bg-orange-50 chai-text-orange-600 chai-px-8 chai-py-3 chai-rounded chai-text-12">
          ${item.class}
        </code>
      </td>
      <td class="chai-px-16 chai-py-10 mono chai-text-slate-600 chai-text-12" >
        ${item.property}
      </td>
      <td class="chai-px-16 chai-py-10 chai-text-slate-400 chai-text-13">
        ${item?.note ? item?.note : ''}
      </td>
    </tr>
  `
    )
    .join('');
}
const theadData = [
  { label: 'Class' },
  { label: 'CSS Property' },
  { label: 'Note' },
];
function renderTHead(thead, data) {
  thead.innerHTML = `
    <tr class="chai-bg-slate-50 chai-border-b chai-border-slate-200">
      ${data
        .map(
          (item) => `
        <th
          class="mono chai-text-slate-400 chai-text-left chai-px-16 chai-py-10 chai-text-11 chai-uppercase chai-tracking-widest chai-font-500">
          ${item.label}
        </th>
      `
        )
        .join('')}
    </tr>
  `;
}

// DATA
const paddingData = [
  { class: 'chai-p-{n}', property: 'padding: npx', note: 'All sides' },
  {
    class: 'chai-px-{n}',
    property: 'paddingLeft + paddingRight',
    note: 'Horizontal',
  },
  {
    class: 'chai-py-{n}',
    property: 'paddingTop + paddingBottom',
    note: 'Vertical',
  },
  { class: 'chai-pt-{n}', property: 'paddingTop: npx', note: 'Top only' },
  { class: 'chai-pb-{n}', property: 'paddingBottom: npx', note: 'Bottom only' },
  { class: 'chai-pl-{n}', property: 'paddingLeft: npx', note: 'Left only' },
  { class: 'chai-pr-{n}', property: 'paddingRight: npx', note: 'Right only' },
];
const marginData = [
  {
    class: 'chai-m-{n}',
    property: 'margin: npx',
    note: 'All sides',
  },
  {
    class: 'chai-mx-{n}',
    property: 'marginLeft + marginRight',
    note: 'Horizontal',
  },
  {
    class: 'chai-my-{n}',
    property: 'marginTop + marginBottom',
    note: 'Vertical',
  },
  {
    class: 'chai-mt-{n}',
    property: 'marginTop: npx',
    note: 'Top',
  },
  {
    class: 'chai-mb-{n}',
    property: 'marginBottom: npx',
    note: 'Bottom',
  },
  {
    class: 'chai-ml-{n}',
    property: 'marginLeft: npx',
    note: 'Left',
  },
  {
    class: 'chai-mr-{n}',
    property: 'marginRight: npx',
    note: 'Right',
  },
];
const fontSizeData = [
  {
    class: 'chai-text-{n}',
    property: 'fontSize: npx',
    note: 'Any pixel value, e.g. chai-text-18',
  },
];
const fontWeightData = [
  {
    class: 'chai-font-{weight}',
    property: 'fontWeight: value',
    note: 'e.g. chai-font-700, chai-font-bold',
  },
];
const backgroundData = [
  {
    class: 'chai-bg-{color}',
    property: 'backgroundColor: …',
    note: 'Shorthand e.g. chai-bg-red',
  },
  {
    class: 'chai-bg-{color}-{50–900}',
    property: 'backgroundColor: …',
    note: 'Scale e.g. chai-bg-blue-500',
  },
];
const textColorData = [
  {
    class: 'chai-text-{color}',
    property: 'color: …',
    note: 'Shorthand alias',
  },
  {
    class: 'chai-text-{color}-{50–900}',
    property: 'color: …',
    note: 'Full scale',
  },
];
const textAlignData = [
  {
    class: 'chai-text-left',
    property: 'textAlign: left',
    note: 'Left aligned text',
  },
  {
    class: 'chai-text-center',
    property: 'textAlign: center',
    note: 'Centered text',
  },
  {
    class: 'chai-text-right',
    property: 'textAlign: right',
    note: 'Right aligned text',
  },
  {
    class: 'chai-text-justify',
    property: 'textAlign: justify',
    note: 'Justified text',
  },
];
const textTransformData = [
  {
    class: 'chai-uppercase',
    property: 'textTransform: uppercase',
    note: 'HELLO WORLD',
  },
  {
    class: 'chai-lowercase',
    property: 'textTransform: lowercase',
    note: 'hello world',
  },
  {
    class: 'chai-capitalize',
    property: 'textTransform: capitalize',
    note: 'Hello World',
  },
];
const textStyleData = [
  {
    class: 'chai-italic',
    property: 'fontStyle: italic',
    note: 'Italic text',
  },
  {
    class: 'chai-underline',
    property: 'textDecoration: underline',
    note: 'Underlined text',
  },
  {
    class: 'chai-line-through',
    property: 'textDecoration: line-through',
    note: 'Strikethrough',
  },
  {
    class: 'chai-no-underline',
    property: 'textDecoration: none',
    note: 'No decoration',
  },
];
const leadingTrackingData = [
  {
    class: 'chai-leading-{n}',
    property: 'lineHeight: n',
    note: 'e.g. chai-leading-1.5',
  },
  {
    class: 'chai-tracking-{n}',
    property: 'letterSpacing: npx',
    note: 'e.g. chai-tracking-2',
  },
];
const displayData = [
  { class: 'chai-flex', property: 'display: flex' },
  { class: 'chai-block', property: 'display: block' },
  { class: 'chai-inline', property: 'display: inline' },
  { class: 'chai-inline-block', property: 'display: inline-block' },
  { class: 'chai-inline-flex', property: 'display: inline-flex' },
  { class: 'chai-grid', property: 'display: grid' },
  { class: 'chai-hidden', property: 'display: none' },
];
const flexboxData = [
  { class: 'chai-flex-row', property: 'flexDirection: row' },
  { class: 'chai-flex-col', property: 'flexDirection: column' },
  { class: 'chai-flex-wrap', property: 'flexWrap: wrap' },
  { class: 'chai-flex-nowrap', property: 'flexWrap: nowrap' },
  { class: 'chai-flex-1', property: 'flex: 1 1 0%' },
  { class: 'chai-flex-auto', property: 'flex: 1 1 auto' },
  { class: 'chai-flex-none', property: 'flex: none' },
  { class: 'chai-grow', property: 'flexGrow: 1' },
  { class: 'chai-shrink', property: 'flexShrink: 1' },
  { class: 'chai-items-{value}', property: 'alignItems: …' },
  { class: 'chai-justify-{value}', property: 'justifyContent: …' },
  { class: 'chai-self-{value}', property: 'alignSelf: …' },
  { class: 'chai-place-{value}', property: 'placeItems: …' },
];
const gridData = [
  { class: 'chai-cols-{n}', property: 'gridTemplateColumns: repeat(n, 1fr)' },
  { class: 'chai-rows-{n}', property: 'gridTemplateRows: repeat(n, 1fr)' },
  { class: 'chai-col-span-{n}', property: 'gridColumn: span n' },
  { class: 'chai-row-span-{n}', property: 'gridRow: span n' },
];
const gapData = [
  { class: 'chai-gap-{n}', property: 'gap: npx' },
  { class: 'chai-gap-x-{n}', property: 'columnGap: npx' },
  { class: 'chai-gap-y-{n}', property: 'rowGap: npx' },
];
const sizingData = [
  { class: 'chai-w-{n}', property: 'width: npx', note: 'Pixel value' },
  { class: 'chai-w-full', property: 'width: 100%' },
  { class: 'chai-w-screen', property: 'width: 100vw' },
  { class: 'chai-h-{n}', property: 'height: npx' },
  { class: 'chai-h-full', property: 'height: 100%' },
  { class: 'chai-h-screen', property: 'height: 100vh' },
  { class: 'chai-min-w-{n|full|fit}', property: 'minWidth: …' },
  { class: 'chai-min-h-{n|screen}', property: 'minHeight: …' },
  { class: 'chai-max-w-{n|full|fit}', property: 'maxWidth: …' },
  { class: 'chai-max-h-{n}', property: 'maxHeight: …' },
];
const positionData = [
  { class: 'chai-relative', property: 'position: relative' },
  { class: 'chai-absolute', property: 'position: absolute' },
  { class: 'chai-fixed', property: 'position: fixed' },
  { class: 'chai-sticky', property: 'position: sticky' },
  { class: 'chai-static', property: 'position: static' },
  { class: 'chai-top-{n}', property: 'top: npx' },
  { class: 'chai-bottom-{n}', property: 'bottom: npx' },
  { class: 'chai-left-{n}', property: 'left: npx' },
  { class: 'chai-right-{n}', property: 'right: npx' },
  { class: 'chai-inset-{n}', property: 'inset: npx' },
  { class: 'chai-z-{n}', property: 'zIndex: n' },
];
const borderData = [
  { class: 'chai-border', property: 'border: 1px solid black' },
  { class: 'chai-border-{n}', property: 'border: npx solid black' },
  { class: 'chai-border-{color}', property: 'borderColor: …' },
  {
    class: 'chai-border-t / -b / -l / -r',
    property: 'borderTop/Bottom/Left/Right',
  },
  { class: 'chai-rounded', property: 'borderRadius: 4px' },
  { class: 'chai-rounded-{n}', property: 'borderRadius: npx' },
  { class: 'chai-rounded-full', property: 'borderRadius: 9999px' },
  { class: 'chai-rounded-none', property: 'borderRadius: 0' },
];
const shadowData = [
  { class: 'chai-shadow-sm', property: '0 1px 2px rgba(0,0,0,0.05)' },
  { class: 'chai-shadow-md', property: '0 4px 6px rgba(0,0,0,0.1)' },
  { class: 'chai-shadow-lg', property: '0 10px 15px rgba(0,0,0,0.15)' },
  { class: 'chai-shadow-xl', property: '0 20px 25px rgba(0,0,0,0.2)' },
  { class: 'chai-shadow-2xl', property: '0 25px 50px rgba(0,0,0,0.25)' },
  { class: 'chai-shadow-inner', property: 'inset 0 2px 4px rgba(0,0,0,0.06)' },
  { class: 'chai-shadow-none', property: 'none' },
];
const opacityData = [
  {
    class: 'chai-opacity-{0–100}',
    property: 'opacity: n/100',
  },
];
const overflowData = [
  { class: 'chai-overflow-{value}', property: 'overflow: value' },
  { class: 'chai-overflow-x-{value}', property: 'overflowX: value' },
  { class: 'chai-overflow-y-{value}', property: 'overflowY: value' },
];
const cursorData = [
  { class: 'chai-cursor-pointer', property: 'cursor: pointer' },
  { class: 'chai-cursor-default', property: 'cursor: default' },
  { class: 'chai-cursor-not-allowed', property: 'cursor: not-allowed' },
  { class: 'chai-cursor-grab', property: 'cursor: grab' },
  { class: 'chai-cursor-text', property: 'cursor: text' },
];
const transformData = [
  { class: 'chai-rotate-{deg}', property: 'rotate(ndeg)' },
  { class: 'chai-scale-{n}', property: 'scale(n/100)' },
  { class: 'chai-translate-x-{n}', property: 'translateX(npx)' },
  { class: 'chai-translate-y-{n}', property: 'translateY(npx)' },
];
const transitionData = [
  { class: 'chai-transition', property: 'transition: all 150ms ease' },
  { class: 'chai-transition-{ms}', property: 'transition: all nms ease' },
  { class: 'chai-duration-{ms}', property: 'transitionDuration: nms' },
  { class: 'chai-ease-in', property: 'transitionTimingFunction: ease-in' },
  { class: 'chai-ease-out', property: 'transitionTimingFunction: ease-out' },
  {
    class: 'chai-ease-in-out',
    property: 'transitionTimingFunction: ease-in-out',
  },
  { class: 'chai-ease-linear', property: 'transitionTimingFunction: linear' },
];
const miscData = [
  {
    class: 'chai-visible / chai-invisible',
    property: 'visibility: visible / hidden',
  },
  {
    class: 'chai-select-none / -all / -text',
    property: 'userSelect: …',
  },
  {
    class: 'chai-pointer-none / -auto',
    property: 'pointerEvents: …',
  },
  {
    class: 'chai-object-{cover|contain|fill}',
    property: 'objectFit: …',
  },
  {
    class: 'chai-aspect-square / -video',
    property: 'aspectRatio: 1/1 or 16/9',
  },
  {
    class: 'chai-list-{none|disc|decimal}',
    property: 'listStyleType: …',
  },
  {
    class: 'chai-box-border / -content',
    property: 'boxSizing: …',
  },
  {
    class: 'chai-break-{words|all|normal}',
    property: 'overflowWrap / wordBreak',
  },
  {
    class: 'chai-whitespace-{nowrap|pre|normal}',
    property: 'whiteSpace: …',
  },
  {
    class: 'chai-outline / chai-outline-none',
    property: 'outline: none',
  },
  {
    class: 'chai-resize / -x / -y / -none',
    property: 'resize: …',
  },
  {
    class: 'chai-bg-cover / -contain / -center',
    property: 'backgroundSize / Position',
  },
  {
    class: 'chai-bg-no-repeat',
    property: 'backgroundRepeat: no-repeat',
  },
];
// TARGET SECTION
const section = document.getElementById('padding');

// FIND TABLE BODY INSIDE SECTION
const tbody = section.querySelector('tbody');
const thead = section.querySelector('thead');

// RENDER
renderTHead(thead, theadData);
renderTbody(tbody, paddingData);

const IdNames = {
  padding: paddingData,
  margin: marginData,
  bg: backgroundData,
  textcolor: textColorData,
  fontsize: fontSizeData,
  fontweight: fontWeightData,
  textalign: textAlignData,
  texttrans: textTransformData,
  textstyle: textStyleData,
  leading: leadingTrackingData,
  display: displayData,
  flexbox: flexboxData,
  grid: gridData,
  gap: gapData,
  sizing: sizingData,
  position: positionData,
  border: borderData,
  shadow: shadowData,
  opacity: opacityData,
  overflow: overflowData,
  cursor: cursorData,
  transform: transformData,
  transition: transitionData,
  misc: miscData,
};
Object.keys(IdNames).forEach((id) => {
  const section = document.getElementById(id);
  if (!section) return;
  const thead = section.querySelector('thead');
  const tbody = section.querySelector('tbody');
  if (thead && tbody) {
    renderTHead(thead, theadData);
    renderTbody(tbody, IdNames[id]);
  }
});

function generateColorUtilities(colors) {
  const result = [];

  Object.entries(colors).forEach(([color, value]) => {
    if (typeof value === 'string') {
      // shorthand
      result.push({
        class: `chai-bg-${color}`,
        property: `backgroundColor: ${value}`,
      });
      result.push({
        class: `chai-text-${color}`,
        property: `color: ${value}`,
      });
    } else {
      // scale
      Object.entries(value).forEach(([shade, hex]) => {
        result.push({
          class: `chai-bg-${color}-${shade}`,
          property: `backgroundColor: ${hex}`,
        });
        result.push({
          class: `chai-text-${color}-${shade}`,
          property: `color: ${hex}`,
        });
      });
    }
  });

  return result;
}
