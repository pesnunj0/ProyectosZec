
namespace ProyectosZec.Intranet.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Intranet.Sedes")]
    [BasedOnRow(typeof(Entities.SedesRow), CheckNames = true)]
    public class SedesForm
    {
        public String Sede { get; set; }
    }
}