const db = require('../../database/db');
const Patient = db.patients;

exports.create = async (req, res, next) => {
    if(!req.body) {
        res.status(400).send({message: "Content can not be empty!" });
    }

    const patient = new Patient(
        {
            firstname: req.body.firstname, 
            lastname: req.body.lastname, 
            telephone: req.body.telephone, 
            address: req.body.address,
            uniqcode: req.body.uniqcode
        }
    )
    
    await patient
        .save(patient)
        .then(() => {
            res.send({message: 'Patient created successfully'});
        })
        .catch(err => {
            console.log(err);
        });
};


exports.findOne = async (req, res) => {
    const id = req.params.id;
   if(!id) {
     res.status(400).send({message: "Content can not be empty!" });
   }

   await Patient.findById(id)
      .then(async data => {
        if (!data){ res.status(404).send({ message: "Not found Patient with id " + id });}
        else {
            res.status(200).send(data);
         }
      }
   ).catch(err => {
    console.log(err);
   });
}

exports.findAll = async (req, res, next) => {
    await Patient
        .find()
        .then((data) => {
            res.send(data);
        })
        .catch(err => console.log(err))
};

// Delete all Alert from the database.
exports.deleteAll = (req, res) => {
    Patient.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Patient were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all patient."
      });
    });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    Patient.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Patient with id=${id}. Maybe Patient was not found!`
          });
        } else {
          res.send({
            message: "Patient was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Patient with id=" + id
        });
      });
};


// Update a User by the id in the request
exports.update = (req, res) => {
    if (!req.body && !req.params.id) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
    });
  }

  const telephone = req.body.firstname;
  const lastname = req.body.firstname;
  const firstname = req.body.firstname;

  Patient.findOneAndUpdate(
    { _id: req.params.id},
    {
      $set: {
        firstname: telephone,
        lastname: lastname,
        firstname: firstname
      }
    },
    { new: true },
    (err, data) => {
    if (err) return res.status(500).send(err);
         return res.status(200).send({ message: "successfully updated"});
    }
 );
}


