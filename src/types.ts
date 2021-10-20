import { PageInterpolatorParams } from "react-native-infinite-pager";
import { useAnimatedStyle } from "react-native-reanimated";
import { DEFAULT_THEME } from "./defaults";

export type OnDateSelect =
  | undefined
  | ((date: Date, options: { isSelected: boolean }) => void);

export type DayComponentType = (props: {
  date: Date;
  isInDisplayedMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
}) => JSX.Element | null;

export type HeaderComponentType = (props: { date: Date }) => JSX.Element | null;
export type DayLabelComponentType = (props: {
  date: Date;
}) => JSX.Element | null;

export type ImperativeApiOptions = {
  animated?: boolean;
};

export type CalendarImperativeApi = {
  incrementMonth: (options?: ImperativeApiOptions) => void;
  decrementMonth: (options?: ImperativeApiOptions) => void;
  setMonth: (date: Date, options?: ImperativeApiOptions) => void;
};

export type CalendarPageInterpolator = (
  params: CalendarPageInterpolatorParams
) => ReturnType<typeof useAnimatedStyle>;

export type CalendarProps = {
  selectedDate?: Date | null;
  onDateSelect?: OnDateSelect;
  onMonthChange?: (date: Date) => void;
  currentDate?: Date;
  HeaderComponent?: HeaderComponentType;
  DayLabelComponent?: DayLabelComponentType;
  DayComponent?: DayComponentType;
  theme?: Partial<typeof DEFAULT_THEME>;
  monthBuffer?: number;
  minDate?: Date;
  maxDate?: Date;
  pageInterpolator?: CalendarPageInterpolator;
  simultaneousHandlers?: React.Ref<unknown> | React.Ref<unknown>[];
};

export type DayProps = {
  date: Date;
  isInDisplayedMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
  DayComponent?: DayComponentType;
  onDateSelect?: OnDateSelect;
  theme: typeof DEFAULT_THEME;
  dateFormatted: string;
};

export type DayWrapperProps = {
  isInDisplayedMonth: boolean;
  date: Date;
  dateFormatted: string;
};

export type CalendarPageInterpolatorParams = PageInterpolatorParams & {
  theme: typeof DEFAULT_THEME;
};