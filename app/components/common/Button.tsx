"use client";

import classnames from "@/app/utils/classnames";

type ButtonPropsType = {
  link: (e?: any) => void;
  cta?: string;
  children?: React.ReactNode;
  loading?: boolean;
  classname?: string;
  validation?: boolean;
  postIcon?: string;
};

export const Button = ({ link, cta, loading = false, children, classname, validation, postIcon }: ButtonPropsType) => {
    return (
        <button
            onClick={link}
            type="submit"
            className={classnames('p-3 center rounded-md disabled:opacity-50 disabled:cursor-not-allowed', classname)}
            disabled={loading || validation}
        >
            {loading ? 'Please wait...' : cta}
            <p>{children}</p>
            {postIcon && <img src={postIcon} alt="post-icon" />}
        </button>
    );
}
