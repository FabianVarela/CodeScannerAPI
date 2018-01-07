import Codes from '../models/codes';
import moment from 'moment';

export const getCodes = (req, res, next) => {
    Codes.find().lean().exec((err, codes) => res.json(
        {
            codes: codes.map(code => ({
                ...codes
            }))
        }
    ));
};

export const postCodes = (req, res) => {
    var newCode = new Codes(req.body);
    var date = moment().format();

    newCode.date = date;

    newCode.save((err) => {
        if (err) throw err;

        res.send({ 'message': 'success' });
    });
};
