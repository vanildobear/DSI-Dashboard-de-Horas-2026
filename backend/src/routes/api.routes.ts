import { Router, Request, Response } from 'express';

const router = Router();

/**
 * GET /api/health
 */
router.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    message: 'Backend is running',
    timestamp: new Date().toISOString()
  });
});

/**
 * GET /api/hello
 */
router.get('/hello', (req: Request, res: Response) => {
  res.json({
    message: 'Hello from Express Backend!'
  });
});

export default router;

