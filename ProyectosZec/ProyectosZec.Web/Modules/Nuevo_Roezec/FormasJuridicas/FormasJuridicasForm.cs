
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.FormasJuridicas")]
    [BasedOnRow(typeof(Entities.FormasJuridicasRow), CheckNames = true)]
    public class FormasJuridicasForm
    {
        public String Juridica { get; set; }
    }
}