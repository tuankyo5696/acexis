function loadStories(){
    require('../src/stories');
    require('./../src/component/Button/Button.component.story');
    require('./../src/component/AlertDialog/AlertDialog.component.story');
}

const stories = [
    './../src/component/Button/Button.component.story',
    './../src/component/AlertDialog/AlertDialog.component.story'
]

module.exports = {
    loadStories,
    stories
} 