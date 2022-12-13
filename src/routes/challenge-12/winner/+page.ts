import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getRockPaperScissorsResult } from '../options';
import type { Option } from '../options';

export const load: PageLoad = async ({
  url,
}): Promise<{
  result: string;
  user: string;
  computer: string;
}> => {
  const user = url.searchParams.get('user');
  const computer = url.searchParams.get('computer');

  if (!user || !computer) {
    throw redirect(300, '/challenge-12');
  }

  const gameResult = getRockPaperScissorsResult(user as Option, computer as Option);

  let result = '';
  if (gameResult === 'draw') {
    result = 'draw';
  }
  if (gameResult === 'first') {
    result = 'user';
  }
  if (gameResult === 'second') {
    result = 'computer';
  }

  return { result, user, computer };
};
