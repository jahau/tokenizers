/**
 * This class is not supposed to be instantiated directly. Instead, any implementation of a
 * Trainer will return an instance of this class when instantiated.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Trainer {}

export interface TrainerOptions {
  /**
   * A prefix to be used for every subword that is not a beginning-of-word.
   */
  continuingSubwordPrefix?: string;
  /**
   * A suffix to be used for every subword that is a end-of-word.
   */
  endOfWordSuffix?: string;
  /**
   * A list of characters to include in the initial alphabet, even
   * if not seen in the training dataset.
   * If the strings contains more than one character, only the first one
   * is kept.
   * @default []
   */
  initialAlphabet?: string[];
  /**
   * The maximum different characters to keep in the alphabet.
   */
  limitAlphabet?: number;
  /**
   * The minimum frequency a pair should have in order to be merged.
   * @default 2
   */
  minFrequency?: number;
  /**
   * Whether to show progress bars while training.
   * @default true
   */
  showProgress?: boolean;
  /**
   * A list of special tokens the model should know of.
   * @default []
   */
  specialTokens?: string[];
  /**
   * The size of the final vocabulary, including all tokens and alphabet.
   * @default 30000
   */
  vocabSize?: number;
}

/**
 * Instantiate a new BPE Trainer
 * @param [options] BPE Trainer options
 */
export function bpeTrainer(options?: TrainerOptions): Trainer;

/**
 * Instantiate a new WordPiece Trainer
 * @param [options] WordPiece Trainer options
 */
export function wordPieceTrainer(options?: TrainerOptions): Trainer;
