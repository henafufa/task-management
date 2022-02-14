const notFound = (req,res, next)=>{
    res.status(404).send('rout does not exist');
}
module.exports = notFound;