declare const mulika: {
    typeCheck(item: {
        value: any;
        type: string;
    }): void;
    expect(message: string, value: any, assertion: any): void;
};
export default mulika;
