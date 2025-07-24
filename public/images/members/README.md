# Member Photos Directory

This directory contains default SVG avatars for lab members referenced in the JSON files.

## Default Avatar System:
- **default.svg** - Generic default avatar used when no photo is specified
- If a member's JSON file has no `photo` property, the system automatically uses `default.svg`
- The default avatar features a neutral gray gradient with a person silhouette

## Individual Member Avatars:
- **tanaka.svg** - Dr. Hiroshi Tanaka (HT) - Blue gradient
- **sato.svg** - Dr. Yuki Sato (YS) - Green gradient  
- **nakamura.svg** - Dr. Kenji Nakamura (KN) - Red gradient
- **yamamoto.svg** - Akira Yamamoto (AY) - Orange gradient
- **chen.svg** - Mei Chen (MC) - Purple gradient
- **ishida.svg** - Tomoko Ishida (TI) - Pink gradient
- **takahashi.svg** - Ryu Takahashi (RT) - Cyan gradient
- **johnson.svg** - Sarah Johnson (SJ) - Amber gradient
- **suzuki.svg** - Kenta Suzuki (KS) - Gray gradient

## How It Works:
1. **With Photo**: If a member JSON includes `"photo": "/images/members/name.svg"`, that specific avatar is used
2. **Without Photo**: If no photo property exists in the JSON, the system falls back to `default.svg`
3. **Missing Files**: If a specified photo file doesn't exist, the browser will show a broken image

## Format Details:
- **Dimensions**: 400x400 pixels (square)
- **Format**: SVG with gradient backgrounds and person silhouettes or initials
- **Style**: Modern, professional circular avatars
- **Responsive**: Scales properly on all device sizes

## Customization:
To replace with actual photos, simply replace the SVG files with JPG/PNG images of the same name. The recommended dimensions are 400x400 pixels for best quality.
