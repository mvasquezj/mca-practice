using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using contoso.Models;

namespace contoso.Controllers
{    
    public class PersonController: Controller
    {
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = new List<PersonModel>{
                new PersonModel{Dni="46835976", Name="Miguel", LastName="Vásquez", BirthDate = DateTime.Now}
            };
            return Json(list);
        }

        [HttpPost]
        public IActionResult Add(String id){
            return Json(new {data=id});
        }
    }
}