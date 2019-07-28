import drawLocales, { languages } from "../index";

test("drawLocales", () => {
  for (const language of languages) {
    const locale = drawLocales(language);

    // Draw
    expect(locale.draw.handlers).toBeDefined();
    expect(locale.draw.toolbar).toBeDefined();
    // To-do add remaining

    // Edit
    expect(locale.edit.handlers).toBeDefined();
    // To-do add remaining
    expect(locale.edit.toolbar).toBeDefined();

    // Edit.toolbar.actions
    expect(locale.edit.toolbar.actions).toBeDefined();
    expect(locale.edit.toolbar.actions.cancel).toBeDefined();
    expect(locale.edit.toolbar.actions.clearAll).toBeDefined();
    expect(locale.edit.toolbar.actions.save).toBeDefined();

    // Edit.toolbar.buttons
    expect(locale.edit.toolbar.buttons).toBeDefined();
    expect(locale.edit.toolbar.buttons.edit).toBeDefined();
    expect(locale.edit.toolbar.buttons.editDisabled).toBeDefined();
    expect(locale.edit.toolbar.buttons.remove).toBeDefined();
    expect(locale.edit.toolbar.buttons.removeDisabled).toBeDefined();
  }
  // throw error
  expect(() => drawLocales("foobar")).toThrowError("[language] not found");
});
