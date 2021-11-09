export const getTest = (_, res) => {
	res.send({ name: 'hardcoders' });
};

export const posTest = (req, res) => {
	res.send(req.body);
};
