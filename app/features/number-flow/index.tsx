import NF, { type Value } from "@number-flow/react";
import { type FC, useCallback, useState } from "react";
import { cn } from "~/lib/utils";

export const NumberFlow: FC = () => {
  const locale = "en-US";
  const [value, setValue] = useState<Value>(1000);

  const onClickShuffleNumber = useCallback(() => {
    const newValue = Math.floor(Math.random() * 100000);
    setValue(newValue);
  }, []);

  return (
    <div className={cn('grid gap-4 place-items-center')}>
      <NF value={value} format={{ notation: "standard" }} locales={locale} className={cn('text-4xl')}/>
      <button type="button" onClick={onClickShuffleNumber}>
        shuffle number
      </button>
    </div>
  );
};
