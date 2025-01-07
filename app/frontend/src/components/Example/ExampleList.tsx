// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};


const EXAMPLES: ExampleModel[] = [
    { text: "What are the three pillars of central banking?", value: "What are the three pillars of central banking?" },
    { text: "Where do I download BSP Memo template?", value: "Where do I download BSP Memo template?" },
    { text: "What is the BSP Employee's Charter?", value: "What is the BSP Employee's Charter?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
