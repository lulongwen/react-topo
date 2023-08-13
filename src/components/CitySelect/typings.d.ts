
export interface IOption {
  code: string | number;
  name: string;
  disabled?: boolean;
  children?: IOption[];
}

export type IProps = {
  value?: string[];
  onChange: (values: string[]) => void;
  level?: number;
  mode?: 'code' | 'name';
  size?: 'large' | 'middle' | 'small';
}
