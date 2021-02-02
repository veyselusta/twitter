const colors = jest.genMockFromModule('colors');

const unity = s => s

colors.bgRed = {}
colors.blue = unity
colors.bgRed.white = unity

module.exports = colors