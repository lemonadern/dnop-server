import { getMemos } from '$/service/memos'
import { defineController } from './$relay'

export default defineController({ getMemos }, ({ getMemos }) => ({
  get: async () => ({ status: 200, body: await getMemos() })
}))
