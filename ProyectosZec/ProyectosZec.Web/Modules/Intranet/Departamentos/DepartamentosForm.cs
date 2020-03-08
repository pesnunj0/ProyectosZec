
namespace ProyectosZec.Intranet.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Intranet.Departamentos")]
    [BasedOnRow(typeof(Entities.DepartamentosRow), CheckNames = true)]
    public class DepartamentosForm
    {
        public String Departamento { get; set; }
    }
}