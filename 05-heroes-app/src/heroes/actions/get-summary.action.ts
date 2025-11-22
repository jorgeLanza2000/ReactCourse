import { heroApi } from '../api/hero.api';
import type { SummaryInformationResponse } from '../interfaces/summary.response';

export const getSummaryAction =
  async (): Promise<SummaryInformationResponse> => {
    const { data } = await heroApi.get<SummaryInformationResponse>('/summary');

    return data;
  };
