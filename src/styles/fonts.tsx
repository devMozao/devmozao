import { CSSObject, Global } from '@mantine/core'

import {
  InterBlack,
  InterBlackItalic,
  InterBold,
  InterBoldItalic,
  InterExtraBold,
  InterExtraBoldItalic,
  InterExtraLight,
  InterExtraLightItalic,
  InterItalic,
  InterLight,
  InterLightItalic,
  InterMedium,
  InterMediumItalic,
  InterRegular,
  InterSemiBold,
  InterSemiBoldItalic,
  InterThin,
  InterThinItalic,
} from '@/assets'

const InterFonts: CSSObject[] = [
  InterBlack,
  InterBlackItalic,
  InterBold,
  InterBoldItalic,
  InterExtraBold,
  InterExtraBoldItalic,
  InterExtraLight,
  InterExtraLightItalic,
  InterLight,
  InterLightItalic,
  InterMedium,
  InterMediumItalic,
  InterRegular,
  InterItalic,
  InterSemiBold,
  InterSemiBoldItalic,
  InterThin,
  InterThinItalic,
]

function FontsProvider() {
  return <Global styles={InterFonts} />
}

export { FontsProvider }
