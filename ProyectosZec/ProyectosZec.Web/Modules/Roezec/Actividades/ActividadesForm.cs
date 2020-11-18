
namespace ProyectosZec.Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Roezec.Actividades")]
    [BasedOnRow(typeof(Entities.ActividadesRow), CheckNames = true)]
    public class ActividadesForm
    {
        public Int32 IdNace { get; set; }
        public Int32 IdEmpresa { get; set; }
 
    }
}