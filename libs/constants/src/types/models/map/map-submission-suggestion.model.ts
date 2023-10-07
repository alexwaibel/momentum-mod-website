import { Gamemode, TrackType } from '../../../';

export interface MapSubmissionSuggestion {
  trackType: TrackType;
  trackNum: number;
  gamemode: Gamemode;
  tier: number;
  comment: string;
  ranked: boolean;
}
