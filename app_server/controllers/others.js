/* GET about page */

module.exports.about = function(req, res){
  res.render('generic-text', {
     title: 'About Loc8r',
     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, leo eget sodales vestibulum, nulla nibh mattis elit, pulvinar sollicitudin libero metus ut enim. Proin venenatis nisi sed enim aliquet, ut dictum mauris porttitor. Maecenas eros arcu, volutpat quis dolor a, finibus faucibus eros. Aenean cursus non leo in accumsan. In sed fringilla arcu. Donec sit amet justo pulvinar, gravida est quis, dapibus eros. Nunc dictum nisl non rhoncus vestibulum.' });
};
