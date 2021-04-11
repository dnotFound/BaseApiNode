module.exports = (req, res, next) => {
    console.log('REQUEST INFOS --> ', {
        receive_at: new Date(),
        method: req.method,
        headers: req.headers,
        querys: req.query,
        body: req.body,
    })
    next()
}