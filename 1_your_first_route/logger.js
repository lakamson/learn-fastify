import pino from 'pino'

const logger = pino()
logger.info('hello world')

const child = logger.child({ a: 'property' })
child.info('hello child!')
