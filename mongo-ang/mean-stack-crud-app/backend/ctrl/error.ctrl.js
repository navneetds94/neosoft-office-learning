module.exports.get404 = (req,res) => {
  res.status(404).send({error:"Page Not Found"})
}
