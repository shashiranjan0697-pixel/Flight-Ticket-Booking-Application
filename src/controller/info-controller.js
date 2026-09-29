

const info = (req, res)=>{
    return res.status(200).json({
        success : true,
        message : "API working really good.",
        data : {},
        error : {}
    });
}

module.exports = info