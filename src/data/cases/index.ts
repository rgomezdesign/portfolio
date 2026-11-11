import type { CaseStudy } from './types';
import { nutu } from './nutu';
import { palazzo } from './palazzo';
import { nuvem } from './nuvem';
import { eltoroloco } from './eltoroloco';
import { tend } from './tend';
import { portfolioSystem } from './portfolio-system';
import { tendSystem } from './tend-system';

export const caseStudies: Record<string, CaseStudy> = { nutu, 'palazzo-salon': palazzo, nuvem, 'el-toro-loco': eltoroloco, tend, 'portfolio-system': portfolioSystem, 'tend-system': tendSystem };
