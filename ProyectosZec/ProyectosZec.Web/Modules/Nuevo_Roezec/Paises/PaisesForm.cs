
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.Paises")]
    [BasedOnRow(typeof(Entities.PaisesRow), CheckNames = true)]
    public class PaisesForm
    {
        public String Pais { get; set; }
        public String Capital { get; set; }
        public Int32 ContinenteId { get; set; }
    }
}