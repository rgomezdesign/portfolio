import type { CaseStudy } from './types';
import { nutu } from './nutu';
import { palazzo } from './palazzo';
import { nuvem } from './nuvem';
import { eltoroloco } from './eltoroloco';

export const caseStudies: Record<string, CaseStudy> = { nutu, 'palazzo-salon': palazzo, nuvem, 'el-toro-loco': eltoroloco };
