import kaboom from "kaboom";

const { add, text, pos } = kaboom({ global: false });

add([text("hello"), pos(120, 80)]);
