import React, { useMemo } from "react";
import { Button, Input } from 'rebear';
import styles from './Settings.module.scss';

type SettingsProps = {
  fontSize: number;
  setFontSize: (value: number) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const Settings = (props: SettingsProps) => {
  const { fontSize, setFontSize, darkMode, setDarkMode } = props;

  const variant = useMemo(() => {
    return darkMode ? 'primary' : 'tertiary'
  }, [darkMode])

  const handleSetDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = Number(target.value);
    setFontSize(value);
  }

  return (
    <section>
      <Button variant={variant} onClick={handleSetDarkMode}>Dark Mode</Button>

      Cỡ chữ: <Input value={fontSize} onChange={handleFontSizeChange} />
    </section>
  );
};

export default Settings;
