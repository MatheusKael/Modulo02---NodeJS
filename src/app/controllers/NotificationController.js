import User from '../models/User';
import Notification from '../schemas/Notification'

class NotificationController{
  async index(req, res){
    const checkIsProvider = await User.findOne({
      where: { id: req.userId , provider: true },
    });

    if (!checkIsProvider) {
      return res.status(401).json({ error: 'only provider can load notifications' })
    }
    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({createdAt: -1})
      .limit(20);

    return res.json(notifications)
  }
}


export default new NotificationController();
