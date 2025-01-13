import FingerprintController from '@main/database/controllers/fingerprint.controller'

export const fingerprintListener = {
  readFingerprint: async () => await FingerprintController.readFingerprint()
}
