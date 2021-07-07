import { useContext, useMemo, Dispatch, SetStateAction } from 'react';
import ThemeContext from './context';

const deepMergeObject = (target: any, source: any) => {
  if (!target || !source) {
    return target;
  }
  if (typeof target !== 'object') {
    return target;
  }
  const destination: any = {};
  for (const key in target) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      let targetValue = target[key];
      if (targetValue && typeof targetValue === 'object') {
        targetValue = deepMergeObject(targetValue, source?.[key] || {});
      }
      destination[key] = targetValue;
    }
  }
  return destination;
};

function useTheme(
  overrides?: any,
): [AnnaNative.Theme, Dispatch<SetStateAction<AnnaNative.Theme>>?] {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  const result = useMemo(
    () => (theme && overrides ? deepMergeObject(theme, overrides) : theme || overrides),
    [theme, overrides],
  );

  return [result, context.setTheme];
}

export default useTheme;
