import * as React from "react";

export interface RootComponentProps {
  category?: number;
}

const Root = (props: RootComponentProps) => {
  return (
    <div>
      Root Component
      <div>
        {JSON.stringify(props)}
      </div>
    </div>
  )
};

export default Root;
