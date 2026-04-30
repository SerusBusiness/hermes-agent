import { Text } from '@hermes/ink'

import { isMac } from '../lib/platform.js'
import type { Theme } from '../theme.js'

export function StashIndicator({ count, t }: { count: number; t: Theme }) {
  if (!count) {
    return null
  }

  const mod = isMac ? 'Cmd' : 'Ctrl'

  return (
    <Text color={t.color.accent} dimColor>
      {`${count} stashed message${count === 1 ? '' : 's'} · ${mod}+S to stash · ${mod}+P to pop`}
    </Text>
  )
}
